
export default function Section1() {
  return (
    <div className="w-full h-screen text-white/70 border-b border-white/20 flex justify-center items-start text-[25px] gap-[5%] pb-[2%]">
      <div className="w-[50%] h-full flex flex-col justify-center items-start gap-[2%] pl-[6%]">
      <div className="w-[20%] h-[5%] bg-linear-to-r from-blue-400 to-indigo-800 border border-white/30 rounded-2xl flex justify-center items-center text-[18px] text-shadow-lg">
        About Me
      </div>
      
      <h1 className="text-[60px] ">Hi, I'm <strong className="color-p">Arman</strong></h1>
      <p className="text-[20px] ">Full Stack Developer <strong className="color-s">| Problem Solver <strong className="color-t">|</strong > LifeLong Learner</strong></p>
      <p>Building fast, stable and beautiful <br /> web applicationis and pages,<br /> and solving Problems with clean  and efficent code</p>
      <div className="w-full h-[35%] flex items-center justify-center gap-[3%] py-[4%]">
        <div className="w-[50%] h-full border border-white/20 rounded-4xl shadow-2xl shadow-indigo-600/30   flex flex-col justify-center items-start p-[2%] gap-[5%]">
          <p className="color-p">My mission</p>
          <p className="color-t">To build impactfull solutions that make people lives easier through thechnology </p>
        </div>
        <div className="w-[50%] h-full border border-white/20 rounded-4xl shadow-2xl shadow-indigo-600/30 flex flex-col justify-center items-start p-[2%] gap-[5%]">
          <p className="color-s">My Vision</p>
          <p className="color-t">To Become a better developer every day and contribute to meaningful projects</p>
        </div>
      </div>
      </div>
      

      <div className="w-[50%] h-full flex flex-col justify-center items-start gap-[2%] pr-[6%] py-[10%]">
        <div className="w-full h-full shadow-2xl shadow-indigo-600/30 border border-white/30 rounded-4xl flex flex-col justify-center items-center p-[3%]">
          <div className="w-full h-[70%] flex flex-col p-[5%]">
            <h2 className="text-[35px] color-p flex"><img src="https://img.icons8.com/?size=100&id=p8UFrp2VUgHR&format=png&color=000000" className="h-[55%]"/>Quick Info</h2>
            <div className="w-full h-[15%] flex justify-between items-center border-t border-b border-white/10 ">
              <p className="flex h-full "><img src="https://img.icons8.com/?size=100&id=0pMTqsnGUaqD&format=png&color=000000" alt="" className="h-[75%]"/>Expirience</p>
              <p>2Years+</p>
            </div>
            <div className="w-full h-[15%] flex justify-between items-center border-t border-b border-white/10">
                <p className="flex h-full"><img src="https://img.icons8.com/?size=100&id=qliQ29ghmkZh&format=png&color=000000" alt="" className="h-[75%]"/>Projects Completed</p>
              <p>5</p>
            </div>
            <div className="w-full h-[15%] flex justify-between items-center border-t border-b border-white/10 ">
                <p className="flex h-full"><img src="https://img.icons8.com/?size=100&id=CaDHTq3bTEI9&format=png&color=000000" alt="" className="h-[75%]"/>Current position</p>
              <p>Full Stack</p>
            </div>
            <div className="w-full h-[15%] flex justify-between items-center border-t border-b border-white/10">
                <p className="flex h-full"><img src="https://img.icons8.com/?size=100&id=f60JD4xkIFQ4&format=png&color=000000" alt="" className="h-[75%]"/>Devloper Level</p>
              <p>Junior</p>
            </div>
            
          </div>
          <div className="w-full h-[30%] flex flex-col justify-center items-start p-[5%]">
            <h2 className="text-[25px] color-p flex"><img src="https://img.icons8.com/?size=100&id=TzmFKlMJTXIL&format=png&color=000000" className="h-[40%]"/>Top Skills</h2>
          </div>

          <div className="">

          </div>
        </div>
      </div>
    </div>
  )
}
