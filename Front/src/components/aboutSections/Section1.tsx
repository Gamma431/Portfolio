export default function Section1(){
  return(
    <div className="w-full min-h-screen theme-bg theme-text flex flex-col lg:flex-row justify-start items-start text-[20px] md:text-[22px] lg:text-[25px] gap-8 lg:gap-[5%] px-[5%] pb-[6%] pt-[14vh]">

      <div className="w-full lg:w-[50%] flex flex-col justify-start items-center lg:items-start gap-5 text-center lg:text-left">

        <div className="w-[180px] h-[45px] bg-gradient-to-r from-blue-400 to-indigo-800 border theme-border rounded-2xl flex justify-center items-center text-[16px] text-white shadow-lg shadow-indigo-900/30">
          About Me
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[40px] md:text-[50px] lg:text-[60px] leading-none font-bold theme-text-strong">
            Hi, I'm <strong className="color-p">Arman</strong>
          </h1>

          <p className="text-[17px] md:text-[19px] lg:text-[20px] theme-text">
            Full Stack Developer <strong className="color-s">| Problem Solver <strong className="color-t">|</strong> Lifelong Learner</strong>
          </p>

          <p className="theme-text-soft leading-8 max-w-[680px]">
            Building fast, stable and beautiful <br className="hidden md:block"/>web applications and pages,<br className="hidden md:block"/>and solving problems with clean and efficient code
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-5 pt-5">

          <div className="w-full md:w-[50%] min-h-[210px] border theme-border rounded-[34px] theme-card theme-shadow backdrop-blur-xl flex flex-col justify-center items-start p-7 gap-4 text-left hover:border-indigo-400/40 hover:bg-indigo-500/[0.06] transition-all duration-300">
            <p className="color-p text-[24px] md:text-[27px] font-semibold">My Mission</p>
            <p className="theme-text-soft leading-8 text-[18px] md:text-[21px]">To build impactful solutions that make people's lives easier through technology.</p>
          </div>

          <div className="w-full md:w-[50%] min-h-[210px] border theme-border rounded-[34px] theme-card theme-shadow backdrop-blur-xl flex flex-col justify-center items-start p-7 gap-4 text-left hover:border-purple-400/40 hover:bg-purple-500/[0.06] transition-all duration-300">
            <p className="color-s text-[24px] md:text-[27px] font-semibold">My Vision</p>
            <p className="theme-text-soft leading-8 text-[18px] md:text-[21px]">To become a better developer every day and contribute to meaningful projects.</p>
          </div>

        </div>

      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-start items-start">

        <div className="w-full min-h-[610px] theme-shadow border theme-border rounded-[34px] theme-card backdrop-blur-xl flex flex-col justify-start items-center p-6 md:p-8 text-[18px] md:text-[20px] overflow-hidden">

          <InfoRow img="https://img.icons8.com/?size=100&id=0pMTqsnGUaqD&format=png&color=000000" title="Experience" value="2 Years+"/>

          <InfoRow img="https://img.icons8.com/?size=100&id=qliQ29ghmkZh&format=png&color=000000" title="Projects Completed" value="5"/>

          <InfoRow img="https://img.icons8.com/?size=100&id=CaDHTq3bTEI9&format=png&color=000000" title="Current Position" value="Full Stack"/>

          <InfoRow img="https://img.icons8.com/?size=100&id=f60JD4xkIFQ4&format=png&color=000000" title="Developer Level" value="Junior"/>

          <div className="w-full flex flex-col justify-center items-start pt-10 gap-6">

            <h2 className="text-[25px] color-p flex items-center gap-3">
              <img src="https://img.icons8.com/?size=100&id=TzmFKlMJTXIL&format=png&color=000000" className="h-[38px] opacity-80" alt="skills"/>
              Top Skills
            </h2>

            <div className="w-full flex flex-wrap justify-center lg:justify-start gap-3 text-[16px] md:text-[18px]">
              <Skill text="React" className="border-blue-400/30 bg-blue-500/10 text-blue-300"/>
              <Skill text="TypeScript" className="border-indigo-400/30 bg-indigo-500/10 text-indigo-300"/>
              <Skill text="Node.js" className="border-green-400/30 bg-green-500/10 text-green-300"/>
              <Skill text="Tailwind" className="border-cyan-400/30 bg-cyan-500/10 text-cyan-300"/>
              <Skill text="Express" className="border-purple-400/30 bg-purple-500/10 text-purple-300"/>
              <Skill text="Prisma" className="border-yellow-400/30 bg-yellow-500/10 text-yellow-300"/>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

function InfoRow({img,title,value}:{img:string,title:string,value:string}){
  return(
    <div className="w-full min-h-[82px] flex justify-between items-center border-b theme-border last:border-b-0 gap-5">
      <div className="w-[65%] flex items-center gap-4">
        <div className="w-[52px] h-[52px] rounded-2xl border theme-border theme-card-2 flex justify-center items-center shrink-0">
          <img src={img} alt={title} className="h-[36px] opacity-80"/>
        </div>
        <span className="theme-text">{title}</span>
      </div>
      <p className="theme-text-soft text-right">{value}</p>
    </div>
  )
}

function Skill({text,className}:{text:string,className:string}){
  return(
    <div className={`px-6 py-3 rounded-2xl border theme-shadow ${className}`}>
      {text}
    </div>
  )
}