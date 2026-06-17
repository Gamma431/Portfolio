export default function Section2(){
  return(
    <div className="w-[92%] mx-auto min-h-[900px] lg:min-h-[60vh] border theme-border theme-shadow rounded-[50px] lg:rounded-[400px] mb-[5%] theme-text theme-surface flex flex-col lg:flex-row justify-between items-center p-[5%]">

      <div className="w-full lg:w-[40%] flex items-center justify-center">
        <img src="https://avatars.githubusercontent.com/u/97838617?v=4" alt="GitHub avatar" className="w-[220px] md:w-[280px] lg:w-[350px] rounded-[1000px]"/>
      </div>

      <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-[5%] lg:mt-0">
        <h2 className="color-s text-[26px] md:text-[30px]">My Hobby and Religion</h2>
        <p className="theme-text-soft w-full lg:w-[80%] text-[18px] md:text-[20px] mt-[4%]">Passionate web developer focused on creating modern, user-friendly, and visually appealing websites. Enjoys programming, PC building, exploring Linux, and working on personal projects that encourage creativity and learning. Christianity is a central part of life, shaping values, discipline, and purpose. Constantly seeking new challenges, improving technical skills, and turning ideas into meaningful digital experiences through technology and design.</p>
      </div>

    </div>
  )
}