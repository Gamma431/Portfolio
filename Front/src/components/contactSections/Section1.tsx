import {useRef,useState} from "react"
import emailjs from "@emailjs/browser"
import MessageSent from "../MessageSent"

export default function Section1(){

  const form=useRef<HTMLFormElement>(null)
  const [isSent,setIsSent]=useState(false)

  const sendEmail=(e:React.FormEvent)=>{
    e.preventDefault()

    if(!form.current) return

    emailjs
      .sendForm(
        "service_qs6wewv",
        "template_gpv9kfd",
        form.current,
        "GK6zfgxfh5N_i625Y"
      )
      .then(()=>{
        setIsSent(true)
        form.current?.reset()
      })
      .catch((err)=>{
        console.log(err)
        alert(err.text||"Something went wrong")
      })
  }

  return(
    <div className="w-full min-h-screen theme-text flex flex-col lg:flex-row justify-center items-start text-[20px] gap-[3%] px-[5%] pb-[5%] pt-[14vh]">

      <div className="w-full lg:w-[50%] min-h-[850px] p-[5%] rounded-4xl border theme-border theme-card theme-shadow flex flex-col gap-[3%] justify-center items-start">

        <div className="w-[180px] h-[45px] bg-linear-to-r from-blue-400 to-indigo-800 border theme-border rounded-2xl flex justify-center items-center text-[16px]">
          Get In Touch
        </div>

        <h2 className="text-[36px] md:text-[42px] lg:text-[50px]">
          Lets build something amazing <strong className="color-p">together</strong>
        </h2>

        <p className="theme-text-soft">
          Have an idea, a project, or just want to say hi?
          <br/>
          Im always open to discussing new opportunities
          <br/>
          and interesting projects
        </p>

        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-[3%]">

          <div className="min-h-[110px] flex justify-center items-center text-xl rounded-2xl border theme-border theme-card gap-[2%]">
            <img className="h-[40px]" src="https://img.icons8.com/?size=100&id=gqzoIBeh8sR2&format=png&color=000000" alt=""/>
            <a className="text-[14px]" href="mailto:ghazaryanarman843@gmail.com">
              ghazaryanarman843@gmail.com
            </a>
          </div>

          <div className="min-h-[110px] flex justify-center items-center text-xl rounded-2xl border theme-border theme-card gap-[2%]">
            <img className="h-[40px]" src="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000" alt=""/>
            <a href="https://github.com/Gamma431">
              Gamma431
            </a>
          </div>

          <div className="min-h-[110px] flex justify-center items-center text-xl rounded-2xl border theme-border theme-card gap-[2%]">
            <img className="h-[40px]" src="https://img.icons8.com/?size=100&id=LTvptsXhcJki&format=png&color=000000" alt=""/>
            <span>@ZaSekai</span>
          </div>

          <div className="min-h-[110px] flex justify-center items-center text-xl rounded-2xl border theme-border theme-card gap-[2%]">
            <img className="h-[40px]" src="https://img.icons8.com/?size=100&id=ZyMOv5S0hHtV&format=png&color=000000" alt=""/>
            <span>Arman Ghazaryan</span>
          </div>

        </div>

        <div className="w-full min-h-[130px] flex flex-col md:flex-row border theme-border rounded-2xl theme-card justify-evenly items-center py-[3%] gap-[3%]">

          <div className="w-20 h-20 bg-green-600/10 rounded-full flex justify-center items-center">
            <div className="w-6 h-6 bg-green-600 rounded-full"></div>
          </div>

          <div className="w-full md:w-[40%] text-center md:text-left">
            <strong className="theme-text-strong text-[16px]">
              Currently available for work
            </strong>
            <p className="text-[16px] theme-text-soft">
              Open to Freelance projects and full-time opportunities
            </p>
          </div>

          <a
            href="/Arman_Ghazaryan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[220px] h-[55px] rounded-2xl border border-indigo-500/70 bg-indigo-500/10 flex justify-center items-center"
          >
            View Resume
          </a>

        </div>

      </div>

      <div className="w-full lg:w-[50%] min-h-[850px] p-[5%] rounded-4xl border theme-border theme-card theme-shadow flex flex-col gap-[3%] justify-center items-center mt-[5%] lg:mt-0">

        {isSent ? (
          <MessageSent/>
        ) : (
          <>
            <h3 className="text-[32px] md:text-[40px] theme-text-strong">
              Send me a message
            </h3>

            <p className="text-[16px] theme-text-soft">
              I'll get back to you as soon as possible.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col gap-[4%] justify-center"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full h-[60px] rounded-3xl border theme-border theme-card px-[5%] outline-none"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full h-[60px] rounded-3xl border theme-border theme-card px-[5%] outline-none"
                required
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                className="w-full min-h-[250px] rounded-3xl border theme-border theme-card p-[5%] outline-none resize-none"
                required
              />

              <button
                type="submit"
                className="w-full h-[60px] rounded-3xl border border-indigo-500/50 bg-linear-to-r from-blue-500/20 to-indigo-500/20 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message →
              </button>

            </form>
          </>
        )}

      </div>

    </div>
  )
}