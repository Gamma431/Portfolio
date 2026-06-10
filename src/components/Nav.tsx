import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="w-[82%] h-[10vh] border flex items-center justify-between px-[2%] border-white/20 rounded-3xl top-[2%] fixed backdrop-blur-xl shadow-2xl shadow-black mx-[6.5%]">
        <h1 className="color-t text-[35px]"><strong className="color-s">&lt;Shiroiha</strong><span className="color-p">Portfolio</span>/&gt;</h1>

        <div className="w-[55%] h-full flex justify-evenly items-center text-white/70 text-[20px] ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/stats">Stats</Link>
            <Link to="/contact">Contact</Link>

            <img src="https://img.icons8.com/?size=100&id=I0BKFITuoSCV&format=png&color=000000" alt="" className="h-[40%]"/>
        </div>
    </div>
  )
}
