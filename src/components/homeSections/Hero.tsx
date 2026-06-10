
export default function Hero() {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center gap-[2%] px-[8%] border-b border-white/80">
      <div className="w-[50%] h-full flex flex-col justify-center gap-[3%]">
        <p className="text-[35px] text-white/70">Hi, Im</p>
        <h2 className="color-p text-[130px]">Arman</h2>
        <p className="color-s text-3xl">Full Stack Developer</p>
        <p className="text-[20px] text-white/70">Building fast, stable and beautiful <br /> web applicationis and pages</p>
        <div className="w-full h-[20%] flex py-[6%] gap-[4%] text-white/70 text-[22px]">
          <button className="w-[30%] h-full p-[2%] rounded-xl bg-p border border-white/20">View Projects</button>
          <button className="w-[30%] h-full p-[2%] rounded-xl bg-s border border-white/20">View Projects</button>
        </div>
      </div>

       <div className="w-[50%] h-full flex flex-col justify-center">
        <img src="src/assets/progdesignhero.png" alt=""  className="shadow-2xl rounded-[120px] shadow-indigo-700/15"/>
      </div>
    </div>
  )
}
