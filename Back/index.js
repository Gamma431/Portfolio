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

app.get("/api/monkey-profile", async (req, res) => {
  try {
    const headers = { Authorization: `ApeKey ${process.env.APE_KEY}` }

    const username = process.env.MONKEYTYPE_USERNAME || "ghazaryanarman843"

    const profileRes = await fetch(`https://api.monkeytype.com/users/${username}/profile`, { headers })
    const profileJson = await profileRes.json()

    const lastRes = await fetch("https://api.monkeytype.com/results/last", { headers })
    const lastJson = await lastRes.json()

    if (!profileRes.ok) return res.status(profileRes.status).json({ error: "Profile request failed", monkeytype: profileJson })

    const profile = profileJson.data
    const last = lastJson.data || null

    let avatarUrl = null

    if (profile?.discordId && profile?.discordAvatar) {
      const ext = profile.discordAvatar.startsWith("a_") ? "gif" : "png"
      avatarUrl = `https://cdn.discordapp.com/avatars/${profile.discordId}/${profile.discordAvatar}.${ext}?size=256`
    }

    res.json({ profile: { ...profile, avatarUrl }, last })
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Monkeytype profile", details: err.message })
  }
})

app.listen(PORT,()=>{

console.log(`running on ${PORT}`)

})