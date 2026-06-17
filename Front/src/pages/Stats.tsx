import { useEffect, useState } from "react"

type StatsResponse={

statsData:{
_id:string
completedTests:number
startedTests:number
timeTyping:number
}|null

lastData:{
_id:string
uid:string
wpm:number
rawWpm:number
acc:number
timestamp:number
consistency:number

chartData:{

wpm:number[]

burst:number[]

err:number[]

}

}|null

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

if(loading){

return(

<div className="min-h-screen bg-zinc-950 flex justify-center items-center text-purple-400">

Loading...

</div>

)

}

if(error){

return(

<div className="min-h-screen bg-zinc-950 flex justify-center items-center text-red-400">

{error}

</div>

)

}

if(!data) return null

return(

<div className="min-h-screen bg-zinc-950 text-white p-10">

<h1 className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">

Typing Stats

</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<Box

label="Current WPM"

value={data.lastData?.wpm.toFixed(0)??0}

/>

<Box

label="Accuracy"

value={`${data.lastData?.acc.toFixed(1)??0}%`}

/>

<Box

label="Consistency"

value={`${data.lastData?.consistency.toFixed(1)??0}%`}

/>

<Box

label="Completed Tests"

value={data.statsData?.completedTests??0}

/>

<Box

label="Started Tests"

value={data.statsData?.startedTests??0}

/>

<Box

label="Typing Time"

value={`${Math.round((data.statsData?.timeTyping??0)/3600)}h`}

/>

</div>

<h2 className="text-2xl font-semibold mt-14 mb-6">

Recent Test Graph Data

</h2>

<div className="flex gap-2 items-end h-50 bg-zinc-900/50 rounded-3xl p-6 border border-white/5">

{data.graph.map((wpm,i)=>(

<div

key={i}

className="flex-1 bg-linear-to-t from-indigo-700 to-purple-400 rounded-t-xl"

style={{

height:`${wpm}px`

}}

/>

))}

</div>

</div>

)

}

function Box({label,value}:{label:string,value:string|number}){

return(

<div className="bg-zinc-900/60 border border-white/5 backdrop-blur-xl rounded-3xl p-6">

<p className="text-zinc-500 text-sm uppercase">

{label}

</p>

<h2 className="text-4xl font-bold mt-2">

{value}

</h2>

</div>

)

}