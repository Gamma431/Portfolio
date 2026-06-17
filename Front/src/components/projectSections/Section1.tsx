export default function Section1(){
  return(
    <div className="w-full h-auto theme-text flex flex-col justify-center items-start text-[20px] md:text-[22px] lg:text-[25px] gap-[5%] px-[5%] pb-[5%] pt-[14vh]">

      <ProjectBlock
        main="/AvalonTest.png"
        shots={["/Avalon2.png","/Avalon3.png","/Avalon4.png","/Avalon5.png"]}
        title="Avalon E-Commerce Site"
        desc="Avalon is a modern e-commerce platform focused on PC hardware and custom builds. The project features a clean shopping experience, product browsing, and a future-ready PC configurator system that helps users create personalized computer setups. Built with a strong focus on usability, performance, and modern frontend design."
      />

      <ProjectBlock
        main="/BackshotlibsTest.png"
        shots={["/BackShot1.png","/BackShot2.png","/BackShot3.png"]}
        title="BackShotlibs Web tool"
        desc="BackShotLibs is a modern web-based music streaming platform inspired by today's leading music services. The project focuses on a clean interface, playlist organization, music discovery, and accessibility. Designed as a free-to-use platform at launch, it aims to provide an enjoyable listening experience with a fresh and user-friendly design."
      />

      <ProjectBlock
        main="/ManjiKeyTest.png"
        shots={["/ManjiKey2.png","/ManjiKey3.png","/ManjiKey4.png","/ManjiKey5.png"]}
        title="ManjiKey E-Commerce site"
        desc="ManjiKey is a keyboard-focused e-commerce platform designed for enthusiasts, gamers, and creators. The project provides a modern shopping experience with product showcases, detailed keyboard presentations, and responsive design. Its goal is to combine aesthetics, performance, and accessibility within a dedicated marketplace for mechanical keyboard lovers."
      />

    </div>
  )
}

function ProjectBlock({main,shots,title,desc}:{main:string,shots:string[],title:string,desc:string}){
  return(
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center gap-[4%] mb-[10%]">

      <div className="w-full lg:w-[50%] flex flex-col gap-[3%]">
        <img src={main} alt={title} className="w-full h-65 md:h-95 lg:h-[45vh] rounded-2xl object-cover theme-shadow"/>

        <div className="w-full min-h-75 flex flex-col p-[3%] gap-[3%] rounded-4xl theme-shadow theme-card">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[10%]">
            {shots.slice(0,2).map((img,i)=>(
              <img key={i} src={img} alt={`${title} screenshot ${i+1}`} className="w-full md:w-[50%] h-60 md:h-55 rounded-2xl object-cover my-[4%]"/>
            ))}
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[3%]">
            {shots.slice(2,4).map((img,i)=>(
              <img key={i} src={img} alt={`${title} screenshot ${i+3}`} className="w-full md:w-[50%] h-45 md:h-55 rounded-2xl object-cover"/>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] min-h-[500px] lg:min-h-[93%] p-[4%] flex flex-col border theme-border rounded-2xl theme-card theme-shadow mt-[5%] lg:mt-0">
        <h1 className="text-[36px] md:text-[44px] lg:text-[52px] color-p">{title}</h1>
        <p className="text-[20px] md:text-[24px] lg:text-[30px] mt-[8%] theme-text-soft">{desc}</p>
      </div>

    </div>
  )
}