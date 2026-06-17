export default function Footer(){
  return(
    <footer className="w-full min-h-[60vh] theme-text flex flex-col justify-center items-center px-[5%] py-[8%] border-t theme-border">

      <div className="w-full flex flex-col justify-center items-center text-center mb-[5%]">
        <p className="text-purple-300 tracking-[4px] uppercase text-[14px] md:text-[16px]">Final Step</p>
        <h1 className="color-p text-[38px] md:text-[50px] lg:text-[60px] font-bold">Get In Touch</h1>
        <p className="text-[18px] md:text-[24px] lg:text-[28px] theme-text-soft mt-[1%]">Lets build something <strong className="theme-text-strong">Amazing</strong> <strong className="color-s">together</strong></p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-[5%]">

        <FooterCard icon="https://img.icons8.com/?size=100&id=gqzoIBeh8sR2&format=png&color=000000" title="Email" text="ghazaryanarman843@gmail.com" link="mailto:ghazaryanarman843@gmail.com"/>

        <FooterCard icon="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000" title="GitHub" text="Gamma431" link="https://github.com/Gamma431"/>

        <FooterCard icon="https://img.icons8.com/?size=100&id=LTvptsXhcJki&format=png&color=000000" title="Discord" text="@ZaSekai"/>

        <FooterCard icon="https://img.icons8.com/?size=100&id=ZyMOv5S0hHtV&format=png&color=000000" title="Name" text="Arman Ghazaryan"/>

      </div>

      <div className="w-full rounded-[30px] border theme-border theme-card theme-shadow p-[4%] flex flex-col md:flex-row justify-between items-center gap-5 mb-[4%]">
        <div className="text-center md:text-left">
          <h2 className="text-[24px] md:text-[30px] theme-text-strong">Available for new projects</h2>
          <p className="theme-text-soft text-[16px] md:text-[18px]">Freelance websites, frontend projects, and full-stack ideas.</p>
        </div>

        <a href="/Arman_Ghazaryan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-[220px] h-[60px] rounded-2xl bg-p border theme-border flex justify-center items-center text-white">
          View Resume
        </a>
      </div>

      <hr className="border theme-border w-full mb-[3%]"/>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] md:text-[16px] theme-text-soft text-center md:text-left">
        <p>©2026 Arman Ghazaryan. All rights reserved.</p>
        <p>Built with love using <strong className="color-p">React</strong>, <strong className="color-s">TypeScript</strong> & Tailwind CSS</p>
      </div>

    </footer>
  )
}

function FooterCard({icon,title,text,link}:{icon:string,title:string,text:string,link?:string}){
  const content=(
    <div className="w-full min-h-[120px] flex justify-center items-center rounded-2xl border theme-border theme-card theme-shadow gap-4 px-4 hover:border-purple-400/40 transition-all duration-300">
      <img className="h-[42px]" src={icon} alt=""/>
      <div className="flex flex-col items-start">
        <span className="text-[14px] theme-text-soft">{title}</span>
        <span className="text-[15px] md:text-[16px] theme-text-strong break-all">{text}</span>
      </div>
    </div>
  )

  return link?(
    <a href={link} target={link.startsWith("mailto")?"_self":"_blank"} rel="noopener noreferrer" className="w-full">
      {content}
    </a>
  ):content
}