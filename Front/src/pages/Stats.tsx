import {useEffect,useState} from "react"

type StatsResponse={
  statsData:{_id:string,completedTests:number,startedTests:number,timeTyping:number}|null
  lastData:{_id:string,uid:string,wpm:number,rawWpm:number,acc:number,timestamp:number,consistency:number,restartCount:number,testDuration:number,mode:string,mode2:string,chartData:{wpm:number[],burst:number[],err:number[]}}|null
  graph:number[]
}

export default function Stats(){
  const [data,setData]=useState<StatsResponse|null>(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState<string|null>(null)

  useEffect(()=>{
    async function fetchData(){
      try{
        setLoading(true)
        const res=await fetch("https://portfolioback-oh5r.onrender.com/api/stats")
        if(!res.ok) throw new Error("Failed to fetch stats")
        const json=await res.json()
        setData(json)
      }catch(err){
        setError(err instanceof Error?err.message:"Error")
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  },[])

  if(loading) return <div className="min-h-screen bg-[#05050a] flex justify-center items-center text-purple-400 text-2xl">Loading stats...</div>
  if(error) return <div className="min-h-screen bg-[#05050a] flex justify-center items-center text-red-400 text-2xl">{error}</div>
  if(!data) return null

  const wpm=data.lastData?.wpm??0
  const raw=data.lastData?.rawWpm??0
  const acc=data.lastData?.acc??0
  const consistency=data.lastData?.consistency??0
  const completed=data.statsData?.completedTests??0
  const started=data.statsData?.startedTests??0
  const typingHours=Math.round((data.statsData?.timeTyping??0)/3600)
  const duration=data.lastData?.testDuration?.toFixed(0)??0
  const mode=`${data.lastData?.mode??"time"} ${data.lastData?.mode2??""}`
  const graph=data.graph.length?data.graph:data.lastData?.chartData?.wpm??[]
  const max=Math.max(...graph,1)

  return(
    <div className="w-full min-h-screen bg-[#05050a] text-white px-[4%] py-[8%] relative overflow-hidden">

      <div className="w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[160px] absolute top-[5%] left-[-10%]"></div>
      <div className="w-[500px] h-[500px] bg-indigo-700/20 rounded-full blur-[160px] absolute bottom-[5%] right-[-10%]"></div>

      <div className="w-full relative z-10">

        <div className="mb-[4%]">
          <p className="text-purple-300 text-[18px] tracking-[4px] uppercase">Monkeytype Live Data</p>
          <h1 className="text-[70px] font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-400 to-blue-400">Typing Stats</h1>
          <p className="text-white/50 text-[20px]">Real performance data pulled from my Monkeytype profile </p>
        </div>

        <div className="grid grid-cols-4 gap-[2%] mb-[3%]">
          <StatCard title="Current WPM" value={wpm.toFixed(0)} info="Last test speed"/>
          <StatCard title="Raw WPM" value={raw.toFixed(0)} info="Without corrections"/>
          <StatCard title="Accuracy" value={`${acc.toFixed(1)}%`} info="Last test accuracy"/>
          <StatCard title="Consistency" value={`${consistency.toFixed(1)}%`} info="Typing stability"/>
          <StatCard title="Completed Tests" value={completed} info="Finished tests"/>
          <StatCard title="Started Tests" value={started} info="All started tests"/>
          <StatCard title="Typing Time" value={`${typingHours}h`} info="Total active typing"/>
          <StatCard title="Mode" value={mode} info={`${duration}s duration`}/>
        </div>

        <div className="w-full min-h-[360px] rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black p-[3%] mb-[3%]">

          <div className="flex justify-between items-center mb-[3%]">
            <div>
              <h2 className="text-[32px] font-bold">WPM Flow</h2>
              <p className="text-white/40">Last test chart data from Monkeytype</p>
            </div>
            <div className="px-[2%] py-[1%] rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300">Peak {max} WPM</div>
          </div>

          <div className="w-full h-[220px] flex gap-[1%] items-end">
            {graph.map((num,i)=>(
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full rounded-t-2xl bg-linear-to-t from-indigo-700 via-purple-500 to-fuchsia-300 shadow-lg shadow-purple-900/30" style={{height:`${(num/max)*200}px`}}></div>
                <span className="text-[12px] text-white/30">{num}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="grid grid-cols-3 gap-[2%]">

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black p-[6%]">
            <h3 className="text-[28px] font-bold mb-[5%]">Performance</h3>
            <MiniRow label="Speed Level" value={wpm>=100?"Fast":"Improving"}/>
            <MiniRow label="Accuracy Level" value={acc>=95?"Clean":"Needs focus"}/>
            <MiniRow label="Consistency" value={consistency>=80?"Stable":"Training"}/>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black p-[6%]">
            <h3 className="text-[28px] font-bold mb-[5%]">Achievements</h3>
            <MiniRow label="100+ WPM" value={wpm>=100?"Unlocked":"Locked"}/>
            <MiniRow label="500+ Tests" value={completed>=500?"Unlocked":"Locked"}/>
            <MiniRow label="Backend API" value="Working"/>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black p-[6%]">
            <h3 className="text-[28px] font-bold mb-[5%]">System</h3>
            <MiniRow label="Frontend" value="React TS"/>
            <MiniRow label="Backend" value="Node API"/>
            <MiniRow label="Data Source" value="Monkeytype"/>
          </div>

        </div>

      </div>

    </div>
  )
}

function StatCard({title,value,info}:{title:string,value:string|number,info:string}){
  return(
    <div className="min-h-[150px] rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black p-[8%] hover:border-purple-400/40 hover:bg-purple-500/[0.06] transition-all duration-300">
      <p className="text-white/40 uppercase tracking-[2px] text-[13px]">{title}</p>
      <h2 className="text-[42px] font-bold mt-[4%] text-white">{value}</h2>
      <p className="text-white/35 text-[14px] mt-[2%]">{info}</p>
    </div>
  )
}

function MiniRow({label,value}:{label:string,value:string|number}){
  return(
    <div className="w-full flex justify-between items-center py-[4%] border-b border-white/10 last:border-b-0">
      <span className="text-white/45">{label}</span>
      <strong className="text-purple-300">{value}</strong>
    </div>
  )
}