import {useEffect,useState} from "react"

type StatsResponse={
  statsData:{completedTests:number,startedTests:number,timeTyping:number}|null
  lastData:{wpm:number,rawWpm:number,acc:number,consistency:number}|null
  graph:number[]
}

export default function Section1(){
  const [data,setData]=useState<StatsResponse|null>(null)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    async function getStats(){
      try{
        setLoading(true)
        const res=await fetch("https://portfolioback-oh5r.onrender.com/api/stats")
        const json=await res.json()
        setData(json)
      }catch(err){
        console.log(err)
      }finally{
        setLoading(false)
      }
    }
    getStats()
  },[])

  const currentWpm=data?.lastData?.wpm?.toFixed(0)??"--"
  const rawWpm=data?.lastData?.rawWpm?.toFixed(0)??"--"
  const accuracy=data?.lastData?.acc?.toFixed(1)??"--"
  const completed=data?.statsData?.completedTests??"--"

  return(
    <section className="w-full min-h-screen lg:min-h-[70vh] border-b theme-border theme-bg theme-text relative overflow-hidden flex flex-col justify-center items-center px-[5%] py-[12%] lg:py-[5%]">

      

      <div className="w-full relative z-10 flex flex-col justify-center items-center gap-7">

        <div className="w-full flex flex-col justify-center items-center text-center gap-4">
          <div className="px-5 py-3 rounded-full border border-indigo-400/30 bg-indigo-500/[0.08] backdrop-blur-xl text-indigo-200 text-[13px] md:text-[15px] tracking-[3px] uppercase">
            Monkeytype API
          </div>

          <h1 className="text-[38px] md:text-[52px] lg:text-[65px] font-black leading-none theme-text-strong">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Typing</span> Stats
          </h1>

          <p className="text-[17px] md:text-[20px] text-center theme-text-soft max-w-[680px] leading-8">
            Real data from my Monkeytype <strong className="text-indigo-300">API</strong>, connected through my backend.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">

          <StatBox img="/currentwpm.png" title="Current WPM" value={loading?"...":currentWpm} valueClass="greengrad" info="Last Test"/>
          <StatBox img="/highestwpm.png" title="Raw WPM" value={loading?"...":rawWpm} valueClass="indigograd" info="Without Corrections"/>
          <StatBox img="/accy.png" title="Accuracy" value={loading?"...":`${accuracy}%`} valueClass="yellowgrad" info="Last Test"/>
          <StatBox img="/testcomp.png" title="Tests Completed" value={loading?"...":completed} valueClass="blugrad" info="Total Tests"/>

        </div>

      </div>

    </section>
  )
}

function StatBox({img,title,value,valueClass,info}:{img:string,title:string,value:string|number,valueClass:string,info:string}){
  return(
    <div className="w-full min-h-[285px] border theme-border rounded-[34px] theme-card theme-shadow backdrop-blur-xl flex flex-col justify-around items-center py-7 px-5 relative overflow-hidden hover:border-indigo-400/40 hover:bg-indigo-500/[0.06] hover:scale-[1.02] transition-all duration-300">

      <div className="w-[160px] h-[160px] bg-indigo-500/10 rounded-full blur-[70px] absolute top-[-60px] right-[-60px]"></div>
      <div className="w-[130px] h-[130px] bg-purple-500/10 rounded-full blur-[65px] absolute bottom-[-55px] left-[-50px]"></div>

      <img src={img} alt={title} className="h-[62px] md:h-[74px] object-contain relative z-10 drop-shadow-lg"/>

      <p className="text-center text-[18px] md:text-[21px] font-semibold theme-text-strong relative z-10">{title}</p>

      <p className={`${valueClass} relative z-10 text-[54px] md:text-[66px] leading-none`}>
        {value}
      </p>

      <p className="theme-text-soft text-[16px] md:text-[17px] text-center relative z-10">{info}</p>

    </div>
  )
}