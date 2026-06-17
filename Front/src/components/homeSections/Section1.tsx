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
    <div className="w-full h-[65vh] border-b text-white/70 border-white/20 flex flex-col justify-center items-center text-[25px] gap-[5%] pb-[2%]">

      <h1>Live <strong className="color-p">Typing</strong> Stats</h1>
      <p>Data from monkeytype <strong className="color-s">API</strong></p>

      <div className="w-full h-[70%] flex justify-center items-center gap-[2%]">

        <div className="w-[25%] h-full border border-white/20 rounded-4xl shadow-xl bg-white/2 shadow-black flex flex-col justify-around items-center">
          <img src="/currentwpm.png" alt="Current WPM"/>
          <p>Current WPM</p>
          <p className="greengrad">{currentWpm}</p>
          <p>Last Test</p>
        </div>

        <div className="w-[25%] h-full border border-white/20 rounded-4xl shadow-xl bg-white/2 shadow-black flex flex-col justify-around items-center">
          <img src="/highestwpm.png" alt="Highest WPM"/>
          <p>Raw WPM</p>
          <p className="indigograd">{highestWpm}</p>
          <p>Without Corrections</p>
        </div>

        <div className="w-[25%] h-full border border-white/20 rounded-4xl shadow-xl bg-white/2 shadow-black flex flex-col justify-around items-center">
          <img src="/accy.png" alt="Accuracy"/>
          <p>Accuracy</p>
          <p className="yellowgrad">{accuracy}%</p>
          <p>Last Test</p>
        </div>

        <div className="w-[25%] h-full border border-white/20 rounded-4xl shadow-xl bg-white/2 shadow-black flex flex-col justify-around items-center">
          <img src="/testcomp.png" alt="Tests Completed"/>
          <p>Tests Completed</p>
          <p className="blugrad">{completed}</p>
          <p>Total Tests</p>
        </div>

      </div>

    </div>
  )
}