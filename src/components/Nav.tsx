import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { useState } from "react"

export default function Nav() {
  const [rotate, setRotate] = useState(0)
  return (
    <div className="w-[82%] h-[10vh] border flex items-center justify-between px-[2%] border-white/20 rounded-3xl top-[2%] fixed backdrop-blur-xl shadow-2xl shadow-black mx-[6.5%]">
        <h1 className="color-t text-[35px]"><strong className="color-s">&lt;Shiroiha</strong><span className="color-p">Portfolio</span>/&gt;</h1>

        <div className="w-[55%] h-full flex justify-evenly items-center text-white/70 text-[20px] ">
            <Link to="/"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1, opacity:0.6,}}>Home</motion.p></Link>
            <Link to="/about"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1, opacity:0.6,}}>About</motion.p></Link>
            <Link to="/projects"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1, opacity:0.6,}}>Projects</motion.p></Link>
            <Link to="/stats"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1, opacity:0.6,}}>Stats</motion.p></Link>
            <Link to="/contact"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1, opacity:0.6,}}>Contacts</motion.p></Link>

            <motion.img onClick={()=>setRotate(r=>r+360)} whileHover={{scale:1.1, opacity:0.6}} animate={{rotate}} transition={{duration:0.4, ease:'easeInOut'}} src="https://img.icons8.com/?size=100&id=I0BKFITuoSCV&format=png&color=000000" className="h-[40%]"/>
        </div>
    </div>
  )
}
