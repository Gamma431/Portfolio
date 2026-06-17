import {useEffect,useState} from "react"

type StatsResponse={
  statsData:{completedTests:number,startedTests:number,timeTyping:number}|null
  lastData:{wpm:number,rawWpm:number,acc:number,consistency:number}|null
  graph:number[]
}

export default function Section1(){
  const [data,setData]=useState<StatsResponse|null>(null)

  useEffect(()=>{
    async function getStats(){
      try{
        const res=await fetch("https://portfolioback-oh5r.onrender.com/api/stats")
        const json=await res.json()
        setData(json)
      }catch(err){
        console.log(err)
      }
    }
    getStats()
  },[])

  const currentWpm=data?.lastData?.wpm?.toFixed(0)??"--"
  const highestWpm=data?.lastData?.rawWpm?.toFixed(0)??"--"
  const accuracy=data?.lastData?.acc?.toFixed(1)??"--"
  const completed=data?.statsData?.completedTests??"--"

  return(
    <div className="w-full min-h-screen lg:min-h-[65vh] border-b theme-border theme-text flex flex-col justify-center items-center text-[22px] md:text-[25px] gap-[5%] px-[5%] py-[8%] lg:py-[3%]">

      <h1 className="text-[34px] md:text-[45px] lg:text-[55px] text-center">Live <strong className="color-p">Typing</strong> Stats</h1>
      <p className="text-[17px] md:text-[20px] text-center theme-text-soft">Data from monkeytype <strong className="color-s">API</strong></p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[4%] lg:gap-[2%] mt-[5%]">

        <StatBox img="/currentwpm.png" title="Current WPM" value={currentWpm} valueClass="greengrad" info="Last Test"/>
        <StatBox img="/highestwpm.png" title="Raw WPM" value={highestWpm} valueClass="indigograd" info="Without Corrections"/>
        <StatBox img="/accy.png" title="Accuracy" value={`${accuracy}%`} valueClass="yellowgrad" info="Last Test"/>
        <StatBox img="/testcomp.png" title="Tests Completed" value={completed} valueClass="blugrad" info="Total Tests"/>

      </div>

    </div>
  )
}

function StatBox({img,title,value,valueClass,info}:{img:string,title:string,value:string|number,valueClass:string,info:string}){
  return(
    <div className="w-full min-h-[280px] border theme-border rounded-4xl theme-card theme-shadow flex flex-col justify-around items-center py-[5%] px-[3%]">
      <img src={img} alt={title} className="h-[60px] md:h-[70px] object-contain"/>
      <p className="text-center">{title}</p>
      <p className={valueClass}>{value}</p>
      <p className="theme-text-soft text-[17px] text-center">{info}</p>
    </div>
  )
}