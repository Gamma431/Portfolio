import {Link} from "react-router"

export default function Hero(){
  return(
    <section className="w-full min-h-screen theme-bg theme-text relative overflow-hidden flex flex-col lg:flex-row justify-center items-center gap-[6%] px-[5%] pt-[14vh] pb-[7%]">



      <div className="w-full lg:w-[52%] min-h-[50vh] flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10">

        <div className="px-5 py-3 rounded-full border border-indigo-400/30 bg-indigo-500/[0.08] backdrop-blur-xl text-indigo-200 text-[13px] md:text-[15px] tracking-[3px] uppercase mb-6">
          Full Stack Developer
        </div>

        <p className="text-[24px] md:text-[30px] lg:text-[34px] theme-text-soft mb-3">Hi, Im</p>

        <h1 className="text-[76px] md:text-[112px] lg:text-[140px] font-black leading-none grad-text-primary">
          Arman
        </h1>

        <h2 className="text-[25px] md:text-[31px] lg:text-[36px] font-bold theme-text-strong mt-5">
          I build fast, clean and modern web experiences.
        </h2>

        <p className="text-[16px] md:text-[19px] lg:text-[21px] theme-text-soft max-w-[680px] mt-5 leading-8">
          Focused on React, TypeScript, Tailwind, backend APIs, smooth UI, responsive layouts, and real working projects that feel polished.
        </p>

        <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-9">
          <Link to="/projects" className="w-full sm:w-[210px] h-[62px] rounded-[22px] grad-bg-primary text-white font-bold flex justify-center items-center shadow-lg shadow-indigo-900/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
            View Projects
          </Link>

          <Link to="/contacts" className="w-full sm:w-[210px] h-[62px] rounded-[22px] border border-indigo-400/40 bg-indigo-500/[0.08] text-indigo-200 font-bold flex justify-center items-center backdrop-blur-xl hover:bg-indigo-500/[0.16] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
            Contact Me
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9">
          <HeroStat title="Stack" value="React TS"/>
          <HeroStat title="Focus" value="UI / API"/>
          <HeroStat title="Status" value="Building"/>
        </div>

      </div>

      <div className="w-full lg:w-[48%] min-h-[46vh] flex justify-center items-center relative z-10 mt-10 lg:mt-0">

        <div className="w-full max-w-[640px] rounded-[42px] border theme-border theme-card theme-shadow backdrop-blur-xl p-4 md:p-5 relative overflow-hidden">
          <div className="w-[260px] h-[260px] bg-indigo-500/15 rounded-full blur-[100px] absolute top-[-80px] right-[-80px]"></div>
          <div className="w-[230px] h-[230px] bg-purple-600/15 rounded-full blur-[95px] absolute bottom-[-90px] left-[-80px]"></div>

          <div className="relative z-10 rounded-[32px] overflow-hidden border theme-border">
            <img src="/progdesignhero.png" alt="Developer design hero" className="w-full h-[340px] md:h-[470px] lg:h-[560px] object-cover"/>
          </div>
        </div>

      </div>

    </section>
  )
}

function HeroStat({title,value}:{title:string,value:string}){
  return(
    <div className="min-h-[105px] rounded-[26px] border theme-border theme-card theme-shadow backdrop-blur-xl p-5 flex flex-col justify-between hover:border-indigo-400/40 hover:bg-indigo-500/[0.07] transition-all duration-300">
      <p className="theme-text-soft text-[12px] uppercase tracking-[2px]">{title}</p>
      <h3 className="theme-text-strong text-[25px] md:text-[30px] font-black leading-none">{value}</h3>
    </div>
  )
}