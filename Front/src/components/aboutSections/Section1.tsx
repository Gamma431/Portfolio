export default function Section1(){
  return(
    <div className="w-full h-screen text-white/70 flex justify-center items-start text-[25px] gap-[5%] pb-[2%]">

      <div className="w-[50%] h-full flex flex-col justify-center items-start gap-[2%] pl-[6%]">
        <div className="w-[20%] h-[5%] bg-linear-to-r from-blue-400 to-indigo-800 border border-white/30 rounded-2xl flex justify-center items-center text-[18px] text-shadow-lg">About Me</div>

        <h1 className="text-[60px]">Hi, I'm <strong className="color-p">Arman</strong></h1>
        <p className="text-[20px]">Full Stack Developer <strong className="color-s">| Problem Solver <strong className="color-t">|</strong> Lifelong Learner</strong></p>
        <p>Building fast, stable and beautiful <br/>web applications and pages,<br/>and solving problems with clean and efficient code</p>

        <div className="w-full h-[35%] flex items-center justify-center gap-[3%] py-[4%]">
          <div className="w-[50%] h-full border border-white/20 rounded-4xl shadow-2xl shadow-black bg-white/2 flex flex-col justify-center items-start p-[2%] gap-[5%]">
            <p className="color-p">My Mission</p>
            <p className="color-t">To build impactful solutions that make people's lives easier through technology.</p>
          </div>

          <div className="w-[50%] h-full border border-white/20 rounded-4xl shadow-2xl shadow-black bg-white/2 flex flex-col justify-center items-start p-[2%] gap-[5%]">
            <p className="color-s">My Vision</p>
            <p className="color-t">To become a better developer every day and contribute to meaningful projects.</p>
          </div>
        </div>
      </div>

      <div className="w-[50%] h-full flex flex-col justify-center items-start gap-[2%] pr-[6%] py-[10%]">
        <div className="w-full h-full shadow-2xl shadow-black border border-white/30 rounded-4xl bg-white/2 flex flex-col justify-center items-center p-[3%] text-[20px]">

          <div className="w-full h-[15%] flex justify-between items-center border-t border-b border-white/10">
        <div className="flex h-full items-center gap-[2%] ">
          <img src="https://img.icons8.com/?size=100&id=0pMTqsnGUaqD&format=png&color=000000" alt="" className="h-[75%]"/>
          <span>Experience</span>
        </div>
        <p>2 Years+</p>
      </div>

      <div className="w-full h-[15%] flex justify-between items-center border-t border-b border-white/10">
        <div className="w-[50%] flex h-full items-center gap-[2%]">
          <img src="https://img.icons8.com/?size=100&id=qliQ29ghmkZh&format=png&color=000000" alt="" className="h-[75%]"/>
          <span>Projects Completed</span>
        </div>
        <p>5</p>
      </div>

      <div className="w-full h-[15%] flex justify-between items-center border-t border-b border-white/10">
        <div className="w-[50%] flex h-full items-center gap-[2%]">
          <img src="https://img.icons8.com/?size=100&id=CaDHTq3bTEI9&format=png&color=000000" alt="" className="h-[75%]"/>
          <span>Current Position</span>
        </div>
        <p>Full Stack</p>
      </div>

      <div className="w-full h-[15%] flex justify-between items-center border-t border-b border-white/10">
        <div className="w-[50%] flex h-full items-center gap-[2%]">
          <img src="https://img.icons8.com/?size=100&id=f60JD4xkIFQ4&format=png&color=000000" alt="" className="h-[75%]"/>
          <span>Developer Level</span>
        </div>
        <p>Junior</p>
      </div>

          <div className="w-full h-[35%] flex flex-col justify-center items-start p-[5%] gap-[10%]">
            <h2 className="text-[25px] color-p flex items-center gap-[2%] w-[50%] mt-[5%] "><img src="https://img.icons8.com/?size=100&id=TzmFKlMJTXIL&format=png&color=000000" className="h-[40%] "/>Top Skills</h2>

            <div className="w-full h-auto flex flex-wrap gap-[3%] gap-y-2  pb-[7%] text-[18px]">
              <div className="px-[5%] py-[2%] rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-300 shadow-xl shadow-black">React</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 shadow-xl shadow-black">TypeScript</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-green-400/30 bg-green-500/10 text-green-300 shadow-xl shadow-black">Node.js</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-xl shadow-black">Tailwind</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-xl shadow-black">Express</div>
              <div className="px-[5%] py-[2%] rounded-2xl border border-yellow-400/30 bg-yellow-500/10 text-yellow-300 shadow-xl shadow-black">Prisma</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}