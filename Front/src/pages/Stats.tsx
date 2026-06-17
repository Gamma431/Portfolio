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

  if(loading) return <div className="min-h-screen flex justify-center items-center text-purple-400 text-2xl">Loading stats...</div>
  if(error) return <div className="min-h-screen flex justify-center items-center text-red-400 text-2xl">{error}</div>
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
    <div className="w-full min-h-screen px-[5%] pt-[14vh] pb-[6%] relative overflow-hidden theme-text">

      <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-700/20 rounded-full blur-[120px] md:blur-[160px] absolute top-[5%] left-[-20%] md:left-[-10%]"></div>
      <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-700/20 rounded-full blur-[120px] md:blur-[160px] absolute bottom-[5%] right-[-20%] md:right-[-10%]"></div>

      <div className="w-full relative z-10">

        <div className="mb-[6%] text-center lg:text-left">
          <p className="text-purple-300 text-[14px] md:text-[18px] tracking-[3px] md:tracking-[4px] uppercase">Monkeytype Live Data</p>
          <h1 className="text-[45px] md:text-[60px] lg:text-[70px] font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-400 to-blue-400">Typing Stats</h1>
          <p className="theme-text-soft text-[17px] md:text-[20px]">Real performance data pulled from my Monkeytype profile</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-[5%]">
          <StatCard title="Current WPM" value={wpm.toFixed(0)} info="Last test speed"/>
          <StatCard title="Raw WPM" value={raw.toFixed(0)} info="Without corrections"/>
          <StatCard title="Accuracy" value={`${acc.toFixed(1)}%`} info="Last test accuracy"/>
          <StatCard title="Consistency" value={`${consistency.toFixed(1)}%`} info="Typing stability"/>
          <StatCard title="Completed Tests" value={completed} info="Finished tests"/>
          <StatCard title="Started Tests" value={started} info="All started tests"/>
          <StatCard title="Typing Time" value={`${typingHours}h`} info="Total active typing"/>
          <StatCard title="Mode" value={mode} info={`${duration}s duration`}/>
        </div>

        <div className="w-full min-h-[360px] rounded-[35px] border theme-border theme-card backdrop-blur-xl theme-shadow p-[5%] lg:p-[3%] mb-[5%]">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-[5%]">
            <div>
              <h2 className="text-[28px] md:text-[32px] font-bold theme-text-strong">WPM Flow</h2>
              <p className="theme-text-soft">Last test chart data from Monkeytype</p>
            </div>

            <div className="px-5 py-3 rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
              Peak {max} WPM
            </div>
          </div>

          <div className="w-full h-[220px] flex gap-2 items-end overflow-x-auto pb-3">
            {graph.map((num,i)=>(
              <div key={i} className="min-w-[26px] sm:min-w-0 sm:flex-1 flex flex-col items-center gap-2">
                <div className="w-full rounded-t-2xl bg-linear-to-t from-indigo-700 via-purple-500 to-fuchsia-300 shadow-lg shadow-purple-900/30" style={{height:`${(num/max)*200}px`}}></div>
                <span className="text-[11px] md:text-[12px] theme-text-soft">{num}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="rounded-[30px] border theme-border theme-card backdrop-blur-xl theme-shadow p-[6%]">
            <h3 className="text-[24px] md:text-[28px] font-bold mb-[5%] theme-text-strong">Performance</h3>
            <MiniRow label="Speed Level" value={wpm>=100?"Fast":"Improving"}/>
            <MiniRow label="Accuracy Level" value={acc>=95?"Clean":"Needs focus"}/>
            <MiniRow label="Consistency" value={consistency>=80?"Stable":"Training"}/>
          </div>

          <div className="rounded-[30px] border theme-border theme-card backdrop-blur-xl theme-shadow p-[6%]">
            <h3 className="text-[24px] md:text-[28px] font-bold mb-[5%] theme-text-strong">Achievements</h3>
            <MiniRow label="100+ WPM" value={wpm>=100?"Unlocked":"Locked"}/>
            <MiniRow label="500+ Tests" value={completed>=500?"Unlocked":"Locked"}/>
            <MiniRow label="Backend API" value="Working"/>
          </div>

          <div className="rounded-[30px] border theme-border theme-card backdrop-blur-xl theme-shadow p-[6%]">
            <h3 className="text-[24px] md:text-[28px] font-bold mb-[5%] theme-text-strong">System</h3>
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
    <div className="min-h-[150px] rounded-[30px] border theme-border theme-card backdrop-blur-xl theme-shadow p-[7%] hover:border-purple-400/40 hover:bg-purple-500/[0.06] transition-all duration-300">
      <p className="theme-text-soft uppercase tracking-[2px] text-[12px] md:text-[13px]">{title}</p>
      <h2 className="text-[34px] md:text-[42px] font-bold mt-[4%] theme-text-strong">{value}</h2>
      <p className="theme-text-soft text-[13px] md:text-[14px] mt-[2%]">{info}</p>
    </div>
  )
}

function MiniRow({label,value}:{label:string,value:string|number}){
  return(
    <div className="w-full flex justify-between items-center py-[4%] border-b theme-border last:border-b-0 gap-4">
      <span className="theme-text-soft">{label}</span>
      <strong className="text-purple-300 text-right">{value}</strong>
    </div>
  )
}