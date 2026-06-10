
export default function Footer() {
  return (
    <div className="w-full h-[50vh] flex flex-col justify-start items-center text-white/70">
      <h1 className="color-p text-[35px] font-bold">Get In Touch</h1>
      <p className="text-[25px] mb-[10%]">Lets build Something <strong className="color-t">Amazing</strong> <strong className="color-s ">together</strong> </p>
      <div className="w-full h-[20%] flex justify-center items-center gap-[2%]">
        <div className="w-[25%] flex justify-center items-center text-xl h-full rounded-2xl border border-white/10 bg-white/2 shadow-2xl shadow-white/5 gap-[2%]">
            <img className="h-[40%]" src="https://img.icons8.com/?size=100&id=LLc4zTABb3ud&format=png&color=000000" alt="" />
            <a href="CllgCJqWgvlkTCMqlxDjNVcHJSDhVBJBJwVqVttZxfqlGqfwSVWbzrbxHXCjdkHMScLTQvNXtnV">ghazaryanarman843@gmail.com</a>
        </div>
        <div className="w-[25%] h-full flex justify-center items-center text-xl rounded-2xl border border-white/10 bg-white/2 shadow-2xl shadow-white/5 gap-[2%]">
            <img className="h-[40%]" src="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000" alt="" />
            <a href="https://github.com/Gamma431">Gamma431 </a>
        </div>
        <div className="w-[25%] h-full flex justify-center items-center text-xl rounded-2xl border border-white/10 bg-white/2 shadow-2xl shadow-white/5 gap-[2%]">
            <img className="h-[40%]" src="https://img.icons8.com/?size=100&id=yWF49Qz2fZef&format=png&color=000000" alt="" />
            <a >ZaSekai</a>
        </div>
        <div className="w-[25%] h-full flex justify-center items-center text-xl rounded-2xl border border-white/10 bg-white/2 shadow-2xl shadow-white/5 gap-[2%]">
            <img className="h-[40%]" src="https://img.icons8.com/?size=100&id=jRHIdcLSmO8G&format=png&color=000000" alt="" />
            +374 98 632863
        </div>
       </div>
        <hr className="border border-white/10 my-[2%]  w-full"/>
        <div className="w-full h-[10%] flex items-center justify-between   ">
            <p>©2026 Arman.All rights reserved</p>
            <p>Built with Love, useing <strong className="color-p">React,</strong><strong className="color-s">Typescript</strong> & Tailwind CSS</p>
        </div>
    </div>
  )
}
