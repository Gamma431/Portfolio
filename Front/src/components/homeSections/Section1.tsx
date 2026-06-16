
export default function Section1() {
  return (
    <div className="w-full h-[65vh] border-b text-white/70 border-white/20 flex flex-col justify-center items-center text-[25px] gap-[5%] pb-[2%]">
      <h1 className="">Live <strong className="color-p">Typing</strong> Stats</h1>
      <p>Data from monkeytype <strong className="color-s">API</strong></p>
      <div className="w-full h-[70%] flex justify-center items-center gap-[2%]">
        <div className="w-[25%] h-full border border-white/20 rounded-4xl  shadow-xl bg-white/2 shadow-black flex flex-col justify-around items-center">
            <img src="public/currentwpm.png" alt="" />
            <p>Current WPM</p>
            <p className="greengrad">108</p>
            <p>last 10 tests</p>
        </div>
        <div className="w-[25%] h-full border border-white/20 rounded-4xl  shadow-xl bg-white/2 shadow-black flex flex-col justify-around items-center">
          <img src="public/highestwpm.png" alt="" />
            <p>Highest WPM</p>
            <p className="indigograd">149</p>
            <p>Personal Best</p>
        </div>
        <div className="w-[25%] h-full border border-white/20 rounded-4xl  shadow-xl bg-white/2 shadow-black flex flex-col justify-around items-center">
          <img src="public/accy.png" alt="" />
            <p>Accuracy</p>
            <p className="yellowgrad">95%</p>
            <p>Average Accuracy</p>
        </div>
        <div className="w-[25%] h-full border border-white/20 rounded-4xl  shadow-xl bg-white/2 shadow-black flex flex-col justify-around items-center">
          <img src="public/testcomp.png" alt="" />
            <p>Test Completed</p>
            <p className="blugrad">568</p>
            <p>Total Tests</p>
        </div>
      </div>
    </div>
  )
}
