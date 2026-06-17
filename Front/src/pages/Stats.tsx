import { useEffect, useState } from "react";

type StatsResponse={
  statsData:{
    completedTests:number
    startedTests:number
    timeTyping:number
  }|null

  lastData:{
    wpm:number
    acc:number
    consistency:number
    timestamp:number
  }|null

  history:{
    wpm:number
    acc:number
    timestamp:number|null
  }[]
}

export default function Stats(){

  const [data,setData]=useState<StatsResponse|null>(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState<string|null>(null)

  useEffect(()=>{

    async function fetchData(){

      try{

        setLoading(true)

        const res=await fetch("https://portfolio-fz7v.onrender.com/api/stats")

        if(!res.ok) throw new Error("Failed to fetch")

        const json=await res.json()

        console.log(json)

        setData(json)

      }

      catch(err){

        setError(err instanceof Error?err.message:"Error")

      }

      finally{

        setLoading(false)

      }

    }

    fetchData()

  },[])

  if(loading) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-purple-400">Loading...</div>

  if(error) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-red-400">Error: {error}</div>

  if(!data) return null

  return(

    <div className="min-h-screen bg-zinc-950 text-white p-6">

      <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
        Typing Stats
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        <Box label="Completed Tests" value={data.statsData?.completedTests??0}/>

        <Box label="Started Tests" value={data.statsData?.startedTests??0}/>

        <Box label="Time Typing" value={`${Math.round((data.statsData?.timeTyping??0)/60)}m`}/>

        <Box label="Last WPM" value={data.lastData?.wpm??0}/>

        <Box label="Accuracy" value={`${data.lastData?.acc??0}%`}/>

        <Box label="Consistency" value={`${data.lastData?.consistency??0}%`}/>

      </div>

      <h2 className="mt-10 mb-4 text-xl font-semibold text-zinc-300">
        Recent History
      </h2>

      <div className="space-y-3">

        {data.history.map((h,i)=>(

          <div key={i} className="flex justify-between items-center bg-zinc-900/40 border border-white/5 backdrop-blur-md px-6 py-4 rounded-2xl">

            <span className="font-mono text-lg text-purple-300">
              {h.wpm} WPM
            </span>

            <span className="text-zinc-300">
              {h.acc}%
            </span>

            <span className="text-zinc-500 text-xs tabular-nums">

              {h.timestamp
                ? new Date(h.timestamp).toLocaleDateString()
                : "--"}

            </span>

          </div>

        ))}

      </div>

    </div>

  )

}

function Box({label,value}:{label:string,value:string|number}){

  return(

    <div className="bg-zinc-900/60 border border-white/5 backdrop-blur-xl p-5 rounded-2xl">

      <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
        {label}
      </div>

      <div className="text-2xl font-bold text-white tabular-nums">
        {value}
      </div>

    </div>

  )

}