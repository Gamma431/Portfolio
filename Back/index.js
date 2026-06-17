import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app=express()

app.use(cors({
origin:"*",
methods:["GET"]
}))

app.use(express.json())

app.get("/",(req,res)=>{

res.send("API is active and running.")

})

app.get("/api/stats",async(req,res)=>{

const headers={

Authorization:`ApeKey ${process.env.APE_KEY}`

}

try{

const [statsRes,lastRes]=await Promise.all([

fetch("https://api.monkeytype.com/users/stats",{headers}),

fetch("https://api.monkeytype.com/results/last",{headers})

])

const statsJson=await statsRes.json()

const lastJson=await lastRes.json()

res.json({

statsData:statsJson?.data??null,

lastData:lastJson?.data??null,

graph:lastJson?.data?.chartData?.wpm??[]

})

}

catch(err){

console.error(err)

res.status(500).json({

message:"Something went wrong",

error:err.message

})

}

})

const PORT=process.env.PORT||3001

app.listen(PORT,()=>{

console.log(`running on ${PORT}`)

})