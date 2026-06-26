type Project={
  main:string
  shots:string[]
  title:string
  desc:string
  status:string
  tech:string[]
  live?:string
  github?:string
}

const projects:Project[]=[
  {
    main:"/AvalonTest.png",
    shots:["/Avalon2.png","/Avalon3.png","/Avalon4.png","/Avalon5.png"],
    title:"Avalon E-Commerce Site",
    status:"Fullstack / In Progress",
    tech:["React","TypeScript","Tailwind","Konva","Node"],
    live:"#",
    github:"#",
    desc:"Avalon is a modern e-commerce platform focused on PC hardware and custom builds. The project features a clean shopping experience, product browsing, and a future-ready PC configurator system that helps users create personalized computer setups. Built with a strong focus on usability, performance, and modern frontend design."
  },
  {
    main:"/BackshotlibsTest.png",
    shots:["/BackShot1.png","/BackShot2.png","/BackShot3.png"],
    title:"BackShotlibs Web Tool",
    status:"Frontend / Concept",
    tech:["React","Tailwind","Music UI","Data Mapping"],
    live:"#",
    github:"#",
    desc:"BackShotLibs is a modern web-based music streaming platform inspired by today's leading music services. The project focuses on a clean interface, playlist organization, music discovery, and accessibility. Designed as a free-to-use platform at launch, it aims to provide an enjoyable listening experience with a fresh and user-friendly design."
  },
  {
    main:"/ManjiKeyTest.png",
    shots:["/ManjiKey2.png","/ManjiKey3.png","/ManjiKey4.png","/ManjiKey5.png"],
    title:"ManjiKey E-Commerce Site",
    status:"Frontend / Published",
    tech:["React","TypeScript","Tailwind","Framer Motion"],
    live:"https://gamma431.github.io/ManjiKey/#/",
    github:"https://github.com/Gamma431/ManjiKey",
    desc:"ManjiKey is a keyboard-focused e-commerce platform designed for enthusiasts, gamers, and creators. The project provides a modern shopping experience with product showcases, detailed keyboard presentations, and responsive design. Its goal is to combine aesthetics, performance, and accessibility within a dedicated marketplace for mechanical keyboard lovers."
  }
]

export default function Projects(){
  return(
    <main className="w-full min-h-screen theme-text relative overflow-hidden px-[5%] pt-[14vh] pb-[7%]">



      <section className="w-full relative z-10 flex flex-col gap-14">

        <div className="w-full flex flex-col gap-4 text-center lg:text-left">
          <p className="text-purple-300 text-[14px] md:text-[18px] tracking-[4px] uppercase">Selected Work</p>
          <h1 className="text-[46px] md:text-[72px] lg:text-[86px] font-black leading-none text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-400 to-blue-400">Projects</h1>
          <p className="theme-text-soft text-[17px] md:text-[21px] max-w-[850px] mx-auto lg:mx-0">A collection of my main web projects, built with modern frontend design, clean layouts, responsive pages, and real working ideas.</p>
        </div>

        <div className="w-full flex flex-col gap-20">
          {projects.map((project,i)=>(
            <ProjectBlock key={i} project={project}/>
          ))}
        </div>

      </section>

    </main>
  )
}

function ProjectBlock({project}:{project:Project}){
  return(
    <article className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-stretch gap-7 lg:gap-[4%]">

      <div className="w-full lg:w-[52%] flex flex-col gap-5">

        <div className="w-full rounded-[34px] border theme-border theme-card theme-shadow backdrop-blur-xl p-3 md:p-4 overflow-hidden">
          <img src={project.main} alt={project.title} className="w-full h-[260px] md:h-[390px] lg:h-[46vh] rounded-[24px] object-cover"/>
        </div>

        <div className="w-full rounded-[34px] border theme-border theme-card theme-shadow backdrop-blur-xl p-4 md:p-5 flex flex-col gap-4">

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.shots.slice(0,2).map((img,i)=>(
              <img key={i} src={img} alt={`${project.title} screenshot ${i+1}`} className="w-full h-[220px] md:h-[250px] rounded-[24px] object-cover border theme-border"/>
            ))}
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.shots.slice(2,4).map((img,i)=>(
              <img key={i} src={img} alt={`${project.title} screenshot ${i+3}`} className="w-full h-[200px] md:h-[230px] rounded-[24px] object-cover border theme-border"/>
            ))}
          </div>

        </div>

      </div>

      <div className="w-full lg:w-[48%] min-h-[520px] rounded-[34px] border theme-border theme-card theme-shadow backdrop-blur-xl p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-10 relative overflow-hidden">

        <div className="w-[280px] h-[280px] bg-indigo-500/15 rounded-full blur-[110px] absolute top-[-90px] right-[-80px]"></div>
        <div className="w-[220px] h-[220px] bg-purple-600/15 rounded-full blur-[100px] absolute bottom-[-90px] left-[-70px]"></div>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-indigo-300 text-[13px] md:text-[15px] tracking-[4px] uppercase">{project.status}</p>
            <h2 className="text-[36px] md:text-[50px] lg:text-[58px] font-black theme-text-strong leading-none">{project.title}</h2>
          </div>

          <p className="text-[18px] md:text-[22px] lg:text-[25px] leading-8 md:leading-10 theme-text-soft">{project.desc}</p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map(item=>(
              <span key={item} className="px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/[0.08] text-indigo-200 text-[13px] md:text-[14px]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <ProjectLink href={project.live??"#"} text="View Live"/>
          <ProjectLink href={project.github??"#"} text="GitHub"/>
        </div>

      </div>

    </article>
  )
}

function ProjectLink({href,text}:{href:string,text:string}){
  const disabled=href==="#"

  return(
    <a href={disabled?undefined:href} target={disabled?undefined:"_blank"} rel="noreferrer" className={`w-full sm:w-fit text-center px-6 py-4 rounded-[20px] border font-bold transition-all duration-300 ${disabled?"border-white/10 bg-white/[0.03] text-white/30 cursor-not-allowed":"border-indigo-400/40 bg-indigo-500/[0.10] text-indigo-200 hover:bg-indigo-500/[0.18] hover:scale-[1.03]"}`}>
      {text}
    </a>
  )
}