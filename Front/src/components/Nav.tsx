import {Link} from "react-router-dom"
import {motion} from "motion/react"
import {useState} from "react"

type NavProps={
  dark:boolean
  setDark:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Nav({dark,setDark}:NavProps){
  const [rotate,setRotate]=useState(0)
  const [mobileMenu,setMobileMenu]=useState(false)

  const toggleTheme=()=>{
    setRotate(r=>r+360)
    setDark(!dark)
  }

  return(
    <>
      <div className={`w-[95%] lg:w-[82%] h-[8vh] lg:h-[10vh] fixed top-[2%] left-0 right-0 mx-auto z-[999] rounded-3xl flex items-center justify-between px-[4%] lg:px-[2%] backdrop-blur-[10px] shadow-2xl transition-all duration-300 ${dark?"border theme-border theme-surface theme-shadow theme-text":"border border-black/10 bg-white/50 theme-shadow text-black/70"}`}>

        <h1 className="theme-text text-[20px] md:text-[28px] lg:text-[35px]">
          <strong className="color-s">&lt;Shiroiha</strong><span className="color-p">Portfolio</span>/&gt;
        </h1>

        <div className="hidden lg:flex w-[55%] h-full justify-evenly items-center text-[20px]">
          <Link to="/"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1,opacity:0.6}}>Home</motion.p></Link>
          <Link to="/about"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1,opacity:0.6}}>About</motion.p></Link>
          <Link to="/projects"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1,opacity:0.6}}>Projects</motion.p></Link>
          <Link to="/stats"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1,opacity:0.6}}>Stats</motion.p></Link>
          <Link to="/contacts"><motion.p whileTap={{scale:0.95}} whileHover={{scale:1.1,opacity:0.6}}>Contacts</motion.p></Link>
          <motion.img onClick={toggleTheme} whileHover={{scale:1.1,opacity:0.6}} animate={{rotate}} transition={{duration:0.4,ease:"easeInOut"}} src="https://img.icons8.com/?size=100&id=I0BKFITuoSCV&format=png&color=000000" className="h-[40%] cursor-pointer"/>
        </div>

        <button onClick={()=>setMobileMenu(!mobileMenu)} className="lg:hidden text-[32px] theme-text">
          {mobileMenu?"×":"☰"}
        </button>

      </div>

      {mobileMenu&&(
        <div className={`fixed top-[11vh] left-0 right-0 mx-auto w-[95%] z-[998] rounded-3xl border theme-border theme-surface theme-shadow backdrop-blur-xl flex flex-col items-center gap-6 py-8 text-[22px] lg:hidden ${dark?"theme-text":"text-black/70"}`}>
          <Link to="/" onClick={()=>setMobileMenu(false)}>Home</Link>
          <Link to="/about" onClick={()=>setMobileMenu(false)}>About</Link>
          <Link to="/projects" onClick={()=>setMobileMenu(false)}>Projects</Link>
          <Link to="/stats" onClick={()=>setMobileMenu(false)}>Stats</Link>
          <Link to="/contacts" onClick={()=>setMobileMenu(false)}>Contacts</Link>
          <motion.img onClick={toggleTheme} animate={{rotate}} transition={{duration:0.4,ease:"easeInOut"}} src="https://img.icons8.com/?size=100&id=I0BKFITuoSCV&format=png&color=000000" className="w-[42px] h-[42px] cursor-pointer"/>
        </div>
      )}
    </>
  )
}