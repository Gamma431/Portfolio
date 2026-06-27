import {useEffect,useState} from "react"

type LastData={
  _id:string
  uid:string
  wpm:number
  rawWpm:number
  acc:number
  timestamp:number
  consistency:number
  restartCount:number
  testDuration:number
  mode:string
  mode2:string
  chartData:{wpm:number[],burst:number[],err:number[]}
}

type ResultData={
  wpm?:number
  rawWpm?:number
  acc?:number
}

type StatsResponse={
  statsData:{_id:string,completedTests:number,startedTests:number,timeTyping:number}|null
  lastData:LastData|null
  graph:number[]
  resultsData?:ResultData[]
}

type MonkeyProfileObject={
  name?:string
  xp?:number
  streak?:number
  maxStreak?:number
  isPremium?:boolean
  typingStats?:{completedTests?:number,startedTests?:number,timeTyping?:number}
  details?:{bio?:string}
}

type MonkeyProfileResponse={
  profile?:MonkeyProfileObject|null
  data?:MonkeyProfileObject|null
  last?:LastData|null
  message?:string
}|null

export default function Stats(){
  const [data,setData]=useState<StatsResponse|null>(null)
  const [profileData,setProfileData]=useState<MonkeyProfileResponse>(null)
  const [loading,setLoading]=useState(true)
  const [slowLoading,setSlowLoading]=useState(false)
  const [error,setError]=useState<string|null>(null)

  const backendUrl="https://portfolioback-oh5r.onrender.com"

  useEffect(()=>{
    let alive=true

    const slowTimer=window.setTimeout(()=>{
      if(alive) setSlowLoading(true)
    },15000)

    async function fetchData(){
      try{
        setLoading(true)
        setSlowLoading(false)

        const res=await fetch(`${backendUrl}/api/stats`)
        if(!res.ok) throw new Error("Failed to fetch stats")
        const json=await res.json()
        setData(json)

        try{
          const profileRes=await fetch(`${backendUrl}/api/monkey-profile`)
          if(profileRes.ok){
            const profileJson=await profileRes.json()
            setProfileData(profileJson)
          }
        }catch(err){
          console.log("Profile route not ready yet",err)
        }
      }catch(err){
        setError(err instanceof Error?err.message:"Error")
      }finally{
        if(alive){
          setLoading(false)
          clearTimeout(slowTimer)
        }
      }
    }

    fetchData()

    return()=>{
      alive=false
      clearTimeout(slowTimer)
    }
  },[])

  if(loading) return <LoadingScene slowLoading={slowLoading}/>
  if(error) return <div className="min-h-screen flex justify-center items-center text-red-400 text-2xl">{error}</div>
  if(!data) return null

  const profile=profileData?.profile??profileData?.data??null
  const profileStats=profile?.typingStats
  const wpm=data.lastData?.wpm??0
  const raw=data.lastData?.rawWpm??0
  const acc=data.lastData?.acc??0
  const consistency=data.lastData?.consistency??0
  const completed=profileStats?.completedTests??data.statsData?.completedTests??0
  const started=profileStats?.startedTests??data.statsData?.startedTests??0
  const timeTyping=profileStats?.timeTyping??data.statsData?.timeTyping??0
  const typingHours=Math.round(timeTyping/3600)
  const duration=data.lastData?.testDuration?.toFixed(0)??"0"
  const mode=`${data.lastData?.mode??"time"} ${data.lastData?.mode2??""}`
  const graph=(data.graph?.length?data.graph:data.lastData?.chartData?.wpm)??[]
  const max=Math.max(...graph,1)
  const username="Shiroiha"
  const xp=Number(profile?.xp??0)
  const level=xp?Math.floor(Math.sqrt(xp/100)):0
  const xpPercent=xp?Math.min(100,Math.floor((xp%1000)/10)):45
  const resultList=data.resultsData??[]
  const avg=(arr:number[])=>arr.length?arr.reduce((a,b)=>a+b,0)/arr.length:0
  const avgWpm=resultList.length?avg(resultList.map(el=>el.wpm??0).filter(Boolean)):graph.length?avg(graph):wpm
  const avgRaw=resultList.length?avg(resultList.map(el=>el.rawWpm??0).filter(Boolean)):raw
  const avgAcc=resultList.length?avg(resultList.map(el=>el.acc??0).filter(Boolean)):acc

  return(
    <div className="w-full min-h-screen px-[5%] pt-[14vh] pb-[6%] relative overflow-hidden theme-bg theme-text">

      <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-700/20 rounded-full blur-[120px] md:blur-[160px] absolute top-[5%] left-[-20%] md:left-[-10%]"></div>
      <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-700/20 rounded-full blur-[120px] md:blur-[160px] absolute bottom-[5%] right-[-20%] md:right-[-10%]"></div>

      <div className="w-full relative z-10">

        <div className="w-full rounded-[35px] border theme-border theme-card backdrop-blur-xl theme-shadow p-[5%] lg:p-[3%] mb-[5%] overflow-hidden relative">
          <div className="w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-[110px] absolute top-[-100px] right-[-80px]"></div>
          <div className="w-[250px] h-[250px] bg-purple-600/15 rounded-full blur-[100px] absolute bottom-[-110px] left-[-90px]"></div>

          <div className="relative z-10 flex flex-col gap-7">

            <div className="flex flex-col lg:flex-row justify-between gap-7">

              <div className="flex flex-col justify-center">
                <p className="text-indigo-300 text-[13px] md:text-[15px] tracking-[4px] uppercase">Monkeytype Profile</p>
                <h1 className="text-[42px] md:text-[64px] font-black theme-text-strong leading-none mt-3">{username}</h1>
                <p className="theme-text-soft text-[15px] md:text-[17px] mt-3">{profile?.details?.bio??"Real typing performance synced from Monkeytype"}</p>

                <div className="flex flex-wrap items-center gap-3 mt-4 theme-text-soft text-[14px]">
                  <span>level {level}</span>
                  <span className="w-[5px] h-[5px] rounded-full bg-white/20"></span>
                  <span>{xp?`${xp.toLocaleString()} xp`:"xp hidden"}</span>
                  <span className="w-[5px] h-[5px] rounded-full bg-white/20"></span>
                  <span>{profile?.isPremium?"premium":"typing profile"}</span>
                </div>

                <div className="w-full sm:w-[420px] h-[10px] rounded-full bg-white/10 overflow-hidden mt-4">
                  <div className="h-full rounded-full grad-bg-primary" style={{width:`${xpPercent}%`}}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 w-full lg:w-[480px]">
                <TopMiniCard title="avg wpm" value={avgWpm.toFixed(0)}/>
                <TopMiniCard title="avg raw" value={avgRaw.toFixed(0)}/>
                <TopMiniCard title="avg acc" value={`${avgAcc.toFixed(1)}%`}/>
              </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ProfileStatCard title="completed" value={completed.toLocaleString()} active/>
              <ProfileStatCard title="started" value={started.toLocaleString()}/>
              <ProfileStatCard title="time typing" value={`${typingHours}h`}/>
              <ProfileStatCard title="mode" value={mode}/>
            </div>

          </div>
        </div>

        <div className="mb-[6%] text-center lg:text-left">
          <p className="text-purple-300 text-[14px] md:text-[18px] tracking-[3px] md:tracking-[4px] uppercase">Monkeytype Live Data</p>
          <h1 className="text-[45px] md:text-[60px] lg:text-[70px] font-bold grad-text-primary">Typing Stats</h1>
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
                <div className="w-full rounded-t-2xl grad-bg-chart shadow-lg shadow-purple-900/30" style={{height:`${(num/max)*200}px`}}></div>
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

function LoadingScene({slowLoading}:{slowLoading:boolean}){
  return(
    <div className="w-full min-h-screen relative overflow-hidden flex justify-center items-center theme-bg theme-text">
      <div className="w-[320px] h-[320px] bg-indigo-700/20 rounded-full blur-[120px] absolute top-[15%] left-[-10%]"></div>
      <div className="w-[360px] h-[360px] bg-purple-700/20 rounded-full blur-[130px] absolute bottom-[10%] right-[-12%]"></div>

      <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">
        <div className="relative w-[130px] h-[130px] flex justify-center items-center">
          <div className="absolute inset-0 rounded-full border border-indigo-400/20 animate-ping"></div>
          <div className="absolute inset-3 rounded-full border-t-2 border-indigo-400 animate-spin"></div>
          <div className="absolute inset-7 rounded-full border-b-2 border-purple-400 animate-spin"></div>
          <div className="w-[42px] h-10.5 rounded-2xl grad-bg-loader shadow-lg shadow-indigo-900/40 animate-pulse"></div>
        </div>

        <div>
          <p className="text-indigo-300 text-[13px] md:text-[15px] tracking-[4px] uppercase">Monkeytype API</p>
          <h1 className="text-[34px] md:text-[48px] font-black theme-text-strong mt-3">Loading stats</h1>
          <p className="theme-text-soft text-[15px] md:text-[17px] mt-3">Waking up the backend and pulling fresh typing data...</p>
        </div>

        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-400 animate-bounce"></span>
          <span className="w-3 h-3 rounded-full bg-indigo-400 animate-bounce [animation-delay:150ms]"></span>
          <span className="w-3 h-3 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]"></span>
        </div>

        {slowLoading&&(
          <div className="max-w-130 rounded-3xl border border-indigo-400/30 bg-indigo-500/[0.08] backdrop-blur-xl p-5">
            <h2 className="text-indigo-200 text-[20px] font-bold">Host is taking too long</h2>
            <p className="theme-text-soft mt-2">The backend host may be sleeping or stuck. Refresh the site once.</p>
            <button onClick={()=>window.location.reload()} className="mt-4 px-5 py-3 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 hover:bg-indigo-500/30 transition-all duration-300">Refresh site</button>
          </div>
        )}
      </div>
    </div>
  )
}

function TopMiniCard({title,value}:{title:string,value:string|number}){
  return(
    <div className="min-h-[115px] rounded-[24px] border border-indigo-400/20 bg-indigo-500/[0.07] backdrop-blur-xl p-4 flex flex-col justify-between hover:bg-purple-500/[0.10] hover:border-purple-400/40 transition-all duration-300">
      <p className="text-indigo-200/70 uppercase tracking-[2px] text-[11px]">{title}</p>
      <h2 className="text-[30px] md:text-[38px] font-black theme-text-strong leading-none">{value}</h2>
    </div>
  )
}

function ProfileStatCard({title,value,active}:{title:string,value:string|number,active?:boolean}){
  return(
    <div className={`rounded-[24px] border p-5 backdrop-blur-xl transition-all duration-300 ${active?"border-indigo-400/40 bg-indigo-500/[0.10]":"border-white/10 bg-white/[0.04]"}`}>
      <p className="theme-text-soft uppercase tracking-[2px] text-[11px] md:text-[12px]">{title}</p>
      <h3 className={`text-[26px] md:text-[34px] font-black mt-2 leading-none ${active?"text-indigo-300":"theme-text-strong"}`}>{value}</h3>
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