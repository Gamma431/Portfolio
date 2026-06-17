export default function Section2(){
  return(
    <div className="w-full h-screen border-b text-white/70 border-white/20 flex flex-col justify-center items-center text-[25px] gap-[5%] pb-[2%]">
      <h1>Featured Projects</h1>

      <div className="w-full h-[80%] py-[2%] flex justify-between items-center gap-[2%]">

        <div className="w-[33%] h-full flex flex-col p-[1%] justify-around items-start border border-white/20 rounded-4xl shadow-black shadow-xl bg-white/2">
          <img src="/AvalonTest.png" alt="Avalon project" className="w-full h-[40%] rounded-2xl object-cover"/>
          <h2>Avalon</h2>
          <p>Future-focused PC hardware marketplace with custom build configuration tools.</p>

          <div className="w-full h-[10%] flex gap-[2%] p-[2%]">
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">React</div>
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">Javascript</div>
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">Tailwind</div>
          </div>

          <div className="w-full h-[10%] flex justify-start items-center">
            <a className="flex h-full justify-center items-center gap-[2%] w-[40%]"><img src="https://img.icons8.com/?size=100&id=e9DwK7yjQMjH&format=png&color=000000" alt="" className="h-[60%]"/>(not ready)</a>
            <a href="https://github.com/Gamma431/Avalon.git" className="flex h-full justify-center items-center gap-[2%] w-[40%]"><img src="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000" alt="" className="h-[60%]"/>Github</a>
          </div>
        </div>

        <div className="w-[33%] h-full flex flex-col p-[1%] justify-around bg-white/2 items-start border border-white/20 rounded-4xl shadow-black shadow-xl">
          <img src="/BackshotlibsTest.png" alt="BackShotLibs project" className="w-full h-[40%] rounded-2xl object-cover"/>
          <h2>BackShotLibs</h2>
          <p>Free web-based music streaming platform featuring playlists, discovery, and modern UI design.</p>

          <div className="w-full h-[10%] flex gap-[2%] p-[2%]">
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">React</div>
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">Typescript</div>
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">Tailwind</div>
          </div>

          <div className="w-full h-[10%] flex justify-start items-center">
            <a href="https://gamma431.github.io/BackShotLibs/" className="flex h-full justify-center items-center gap-[2%] w-[40%]"><img src="https://img.icons8.com/?size=100&id=e9DwK7yjQMjH&format=png&color=000000" alt="" className="h-[60%]"/>Live Demo</a>
            <a href="https://github.com/Gamma431/BackShotLibs.git" className="flex h-full justify-center items-center gap-[2%] w-[40%]"><img src="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000" alt="" className="h-[60%]"/>Github</a>
          </div>
        </div>

        <div className="w-[33%] h-full flex flex-col p-[1%] justify-around items-start bg-white/2 border border-white/20 rounded-4xl shadow-black shadow-xl">
          <img src="/ManjiKeyTest.png" alt="ManjiKey project" className="w-full h-[40%] rounded-2xl object-cover"/>
          <h2>ManjiKey</h2>
          <p>Modern keyboard marketplace built for gamers, enthusiasts, and content creators.</p>

          <div className="w-full h-[10%] flex gap-[2%] p-[2%]">
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">React</div>
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">Typescript</div>
            <div className="w-auto h-full p-[1%] px-[3%] rounded-2xl bg-white/10">Tailwind</div>
          </div>

          <div className="w-full h-[10%] flex justify-start items-center">
            <a href="https://gamma431.github.io/ManjiKey/" className="flex h-full justify-center items-center gap-[2%] w-[40%]"><img src="https://img.icons8.com/?size=100&id=e9DwK7yjQMjH&format=png&color=000000" alt="" className="h-[60%]"/>Live Demo</a>
            <a href="https://github.com/Gamma431/ManjiKey.git" className="flex h-full justify-center items-center gap-[2%] w-[40%]"><img src="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000" alt="" className="h-[60%]"/>Github</a>
          </div>
        </div>

      </div>
    </div>
  )
}