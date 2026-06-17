export default function Section2(){
  return(
    <div className="w-full min-h-screen border-b theme-border theme-text flex flex-col justify-center items-center text-[25px] gap-[5%] px-[5%] py-[8%]">

      <h1 className="text-[34px] md:text-[45px] lg:text-[55px] text-center">Featured Projects</h1>

      <div className="w-full flex lg:grid lg:grid-cols-3 gap-[4%] lg:gap-[2%] overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-[4%]">

        <ProjectCard img="/AvalonTest.png" title="Avalon" desc="Future-focused PC hardware marketplace with custom build configuration tools." demo="" github="https://github.com/Gamma431/Avalon.git" tags={["React","Javascript","Tailwind"]} ready={false}/>

        <ProjectCard img="/BackshotlibsTest.png" title="BackShotLibs" desc="Free web-based music streaming platform featuring playlists, discovery, and modern UI design." demo="https://gamma431.github.io/BackShotLibs/" github="https://github.com/Gamma431/BackShotLibs.git" tags={["React","Typescript","Tailwind"]} ready={true}/>

        <ProjectCard img="/ManjiKeyTest.png" title="ManjiKey" desc="Modern keyboard marketplace built for gamers, enthusiasts, and content creators." demo="https://gamma431.github.io/ManjiKey/" github="https://github.com/Gamma431/ManjiKey.git" tags={["React","Typescript","Tailwind"]} ready={true}/>

      </div>

    </div>
  )
}

function ProjectCard({img,title,desc,demo,github,tags,ready}:{img:string,title:string,desc:string,demo:string,github:string,tags:string[],ready:boolean}){
  return(
    <div className="min-w-[85%] sm:min-w-[55%] lg:min-w-0 lg:w-full min-h-[560px] flex flex-col p-[4%] lg:p-[3%] justify-around items-start border theme-border rounded-4xl theme-card theme-shadow snap-center">

      <img src={img} alt={title} className="w-full h-[220px] md:h-[250px] lg:h-[40%] rounded-2xl object-cover"/>

      <h2 className="text-[30px] md:text-[34px] theme-text-strong">{title}</h2>

      <p className="text-[17px] md:text-[19px] theme-text-soft">{desc}</p>

      <div className="w-full flex flex-wrap gap-[2%] py-[3%]">
        {tags.map((tag,i)=>(
          <div key={i} className="w-auto px-[4%] py-[2%] rounded-2xl theme-card-2 border theme-border text-[16px]">{tag}</div>
        ))}
      </div>

      <div className="w-full flex justify-start items-center gap-[5%] text-[17px] md:text-[19px]">
        {ready?(
          <a href={demo} className="flex justify-center items-center gap-[8%]">
            <img src="https://img.icons8.com/?size=100&id=e9DwK7yjQMjH&format=png&color=000000" alt="" className="h-[28px]"/>Live Demo
          </a>
        ):(
          <span className="flex justify-center items-center gap-[8%]">
            <img src="https://img.icons8.com/?size=100&id=e9DwK7yjQMjH&format=png&color=000000" alt="" className="h-[28px]"/>(not ready)
          </span>
        )}

        <a href={github} className="flex justify-center items-center gap-[8%]">
          <img src="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000" alt="" className="h-[28px]"/>Github
        </a>
      </div>

    </div>
  )
}