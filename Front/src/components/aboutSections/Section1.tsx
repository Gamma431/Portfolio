export default function Section1(){
  return(
    <div className="w-full min-h-screen theme-text flex flex-col lg:flex-row justify-center items-start text-[20px] md:text-[22px] lg:text-[25px] gap-[5%] px-[5%] pb-[5%] pt-[14vh]">

      <div className="w-full lg:w-[50%] min-h-[50vh] flex flex-col justify-center items-center lg:items-start gap-[3%] text-center lg:text-left">
        <div className="w-[180px] h-[45px] bg-linear-to-r from-blue-400 to-indigo-800 border theme-border rounded-2xl flex justify-center items-center text-[16px] text-shadow-lg">About Me</div>

        <h1 className="text-[40px] md:text-[50px] lg:text-[60px]">Hi, I'm <strong className="color-p">Arman</strong></h1>
        <p className="text-[17px] md:text-[19px] lg:text-[20px]">Full Stack Developer <strong className="color-s">| Problem Solver <strong className="color-t">|</strong> Lifelong Learner</strong></p>
        <p className="theme-text-soft">Building fast, stable and beautiful <br className="hidden md:block"/>web applications and pages,<br className="hidden md:block"/>and solving problems with clean and efficient code</p>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[3%] py-[4%]">
          <div className="w-full md:w-[50%] min-h-[180px] border theme-border rounded-4xl theme-card theme-shadow flex flex-col justify-center items-start p-[5%] gap-[5%] text-left">
            <p className="color-p">My Mission</p>
            <p className="theme-text-soft">To build impactful solutions that make people's lives easier through technology.</p>
          </div>

          <div className="w-full md:w-[50%] min-h-[180px] border theme-border rounded-4xl theme-card theme-shadow flex flex-col justify-center items-start p-[5%] gap-[5%] text-left mt-[4%] md:mt-0">
            <p className="color-s">My Vision</p>
            <p className="theme-text-soft">To become a better developer every day and contribute to meaningful projects.</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] min-h-[60vh] flex flex-col justify-center items-start gap-[2%] py-[5%]">
        <div className="w-full min-h-[650px] theme-shadow border theme-border rounded-4xl theme-card flex flex-col justify-center items-center p-[5%] text-[18px] md:text-[20px]">

          <div className="w-full h-[15%] flex justify-between items-center border-t border-b theme-border">
            <div className="w-[60%] flex h-full items-center gap-[2%]">
              <img src="https://img.icons8.com/?size=100&id=0pMTqsnGUaqD&format=png&color=000000" alt="" className="h-[55px]"/>
              <span>Experience</span>
            </div>
            <p>2 Years+</p>
          </div>

          <div className="w-full h-[15%] flex justify-between items-center border-t border-b theme-border">
            <div className="w-[60%] flex h-full items-center gap-[2%]">
              <img src="https://img.icons8.com/?size=100&id=qliQ29ghmkZh&format=png&color=000000" alt="" className="h-[55px]"/>
              <span>Projects Completed</span>
            </div>
            <p>5</p>
          </div>

          <div className="w-full h-[15%] flex justify-between items-center border-t border-b theme-border">
            <div className="w-[60%] flex h-full items-center gap-[2%]">
              <img src="https://img.icons8.com/?size=100&id=CaDHTq3bTEI9&format=png&color=000000" alt="" className="h-[55px]"/>
              <span>Current Position</span>
            </div>
            <p>Full Stack</p>
          </div>

          <div className="w-full h-[15%] flex justify-between items-center border-t border-b theme-border">
            <div className="w-[60%] flex h-full items-center gap-[2%]">
              <img src="https://img.icons8.com/?size=100&id=f60JD4xkIFQ4&format=png&color=000000" alt="" className="h-[55px]"/>
              <span>Developer Level</span>
            </div>
            <p>Junior</p>
          </div>

          <div className="w-full h-auto flex flex-col justify-center items-start p-[5%] gap-[10%]">
            <h2 className="text-[25px] color-p flex items-center gap-[2%] mt-[5%]"><img src="https://img.icons8.com/?size=100&id=TzmFKlMJTXIL&format=png&color=000000" className="h-[40px]"/>Top Skills</h2>

            <div className="w-full flex flex-wrap justify-center lg:justify-start gap-3 pb-[7%] text-[16px] md:text-[18px] mt-[4%]">
              <div className="px-[5%] py-[2%] rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-300 theme-shadow">React</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 theme-shadow">TypeScript</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-green-400/30 bg-green-500/10 text-green-300 theme-shadow">Node.js</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 theme-shadow">Tailwind</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300 theme-shadow">Express</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-yellow-400/30 bg-yellow-500/10 text-yellow-300 theme-shadow">Prisma</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}