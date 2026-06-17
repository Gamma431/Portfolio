import {Link} from "react-router"

export default function Hero(){
  return(
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-[4%] px-[6%] pt-[14vh] pb-[5%]">

      <div className="w-full lg:w-[50%] min-h-[45vh] lg:h-full flex flex-col justify-center items-center lg:items-start gap-[3%] text-center lg:text-left">
        <p className="text-[25px] md:text-[30px] lg:text-[35px] theme-text">Hi, Im</p>
        <h2 className="color-p text-[75px] md:text-[100px] lg:text-[130px] leading-none">Arman</h2>
        <p className="color-s text-[24px] md:text-[28px] lg:text-3xl">Full Stack Developer</p>
        <p className="text-[17px] md:text-[19px] lg:text-[20px] theme-text-soft">Building fast, stable and beautiful <br className="hidden md:block"/>web applications and pages</p>

        <div className="w-full h-auto flex justify-center lg:justify-start py-[4%] gap-[4%] theme-text text-[18px] md:text-[20px] lg:text-[22px]">
          <Link to="/projects" className="w-[45%] sm:w-[32%] lg:w-[30%] h-[60px] rounded-xl bg-p border theme-border flex justify-center items-center">View Projects</Link>
          <Link to="/contacts" className="w-[45%] sm:w-[32%] lg:w-[30%] h-[60px] rounded-xl bg-s border theme-border flex justify-center items-center">Contact Me</Link>
        </div>
      </div>

      <div className="w-full lg:w-[50%] min-h-[40vh] lg:h-full flex flex-col justify-center items-center">
        <img src="/progdesignhero.png" alt="Developer design hero" className="w-[85%] md:w-[70%] lg:w-full max-h-[520px] object-contain theme-shadow rounded-[60px] md:rounded-[90px] lg:rounded-[120px]"/>
      </div>

    </div>
  )
}