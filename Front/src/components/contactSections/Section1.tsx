import {useState} from "react"
import type {FormEvent,ChangeEvent} from "react"
import emailjs from "@emailjs/browser"

type FormData={
  name:string
  email:string
  subject:string
  message:string
}

export default function Contact(){
  const [form,setForm]=useState<FormData>({name:"",email:"",subject:"",message:""})
  const [loading,setLoading]=useState(false)
  const [status,setStatus]=useState<"idle"|"success"|"error">("idle")

  const serviceId=import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId=import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey=import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  function handleChange(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
    setForm({...form,[e.target.name]:e.target.value})
    setStatus("idle")
  }

  async function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(!form.name.trim()||!form.email.trim()||!form.message.trim()){
      setStatus("error")
      return
    }

    try{
      setLoading(true)
      setStatus("idle")

      await emailjs.send(serviceId,templateId,{
        from_name:form.name,
        from_email:form.email,
        subject:form.subject||"Portfolio contact message",
        message:form.message
      },publicKey)

      setForm({name:"",email:"",subject:"",message:""})
      setStatus("success")
    }catch(err){
      console.log(err)
      setStatus("error")
    }finally{
      setLoading(false)
    }
  }

  return(
    <main className="w-full min-h-screen px-[5%] pt-[14vh] pb-[7%] relative overflow-hidden theme-text">

      <div className="w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-purple-700/20 rounded-full blur-[130px] md:blur-[170px] absolute top-[8%] left-[-25%] md:left-[-10%]"></div>
      <div className="w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-indigo-700/20 rounded-full blur-[130px] md:blur-[170px] absolute bottom-[5%] right-[-25%] md:right-[-10%]"></div>

      <section className="w-full relative z-10 flex flex-col gap-12">

        <div className="w-full text-center lg:text-left flex flex-col gap-4">
          <p className="text-purple-300 text-[14px] md:text-[18px] tracking-[4px] uppercase">Contact</p>
          <h1 className="text-[46px] md:text-[68px] lg:text-[82px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Get In Touch</h1>
          <p className="theme-text-soft text-[17px] md:text-[21px] max-w-[760px] mx-auto lg:mx-0">Have a project, idea, or collaboration in mind? Send me a message and I’ll reply when I can.</p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-7 lg:gap-9">

          <div className="flex flex-col gap-5">

            <InfoCard title="Email" value="ghazaryanarman843@gmail.com" info="Best way to reach me"/>
            <InfoCard title="Location" value="Armenia" info="Available for remote work"/>
            <InfoCard title="Focus" value="Frontend / Web Apps" info="React, TypeScript, Tailwind, Node"/>

            <div className="rounded-[32px] border theme-border theme-card backdrop-blur-xl theme-shadow p-6 md:p-8 flex flex-col gap-5">
              <h2 className="text-[26px] md:text-[32px] font-bold theme-text-strong">Let’s build clean</h2>
              <p className="theme-text-soft text-[15px] md:text-[17px] leading-7">I care about good UI, smooth interactions, responsive layouts, and real working projects. If the idea is serious, I’m open to talk.</p>
              <div className="flex flex-wrap gap-3">
                <Tag text="React"/>
                <Tag text="TypeScript"/>
                <Tag text="Tailwind"/>
                <Tag text="Backend API"/>
              </div>
            </div>

          </div>

          <form onSubmit={handleSubmit} className="rounded-[35px] border theme-border theme-card backdrop-blur-xl theme-shadow p-6 md:p-8 lg:p-10 flex flex-col gap-6">

            <div className="flex flex-col gap-2 mb-2">
              <h2 className="text-[30px] md:text-[38px] font-black theme-text-strong">Send Message</h2>
              <p className="theme-text-soft text-[15px] md:text-[17px]">Fill the form and it will go straight to my email.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Your Name" name="name" type="text" value={form.name} placeholder="Enter your name" onChange={handleChange}/>
              <Input label="Your Email" name="email" type="email" value={form.email} placeholder="Enter your email" onChange={handleChange}/>
            </div>

            <Input label="Subject" name="subject" type="text" value={form.subject} placeholder="Project, question, collaboration..." onChange={handleChange}/>

            <div className="flex flex-col gap-3">
              <label className="theme-text-soft text-[14px] uppercase tracking-[2px]">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." className="w-full min-h-[180px] resize-none rounded-[24px] border theme-border bg-white/[0.04] px-5 py-4 outline-none theme-text-strong placeholder:text-white/30 focus:border-purple-400/50 focus:bg-purple-500/[0.05] transition-all duration-300"></textarea>
            </div>

            {status==="success"&&(
              <div className="rounded-2xl border border-green-400/30 bg-green-500/10 px-5 py-4 text-green-300">
                Message sent successfully.
              </div>
            )}

            {status==="error"&&(
              <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-red-300">
                Something went wrong. Check the fields or EmailJS keys.
              </div>
            )}

            <button disabled={loading} className="w-full md:w-fit px-8 py-4 rounded-[22px] bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold shadow-lg shadow-indigo-900/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
              {loading?"Sending...":"Send Message"}
            </button>

          </form>

        </div>

      </section>

    </main>
  )
}

function Input({label,name,type,value,placeholder,onChange}:{label:string,name:string,type:string,value:string,placeholder:string,onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}){
  return(
    <div className="flex flex-col gap-3">
      <label className="theme-text-soft text-[14px] uppercase tracking-[2px]">{label}</label>
      <input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} className="w-full h-[58px] rounded-[22px] border theme-border bg-white/[0.04] px-5 outline-none theme-text-strong placeholder:text-white/30 focus:border-purple-400/50 focus:bg-purple-500/[0.05] transition-all duration-300"/>
    </div>
  )
}

function InfoCard({title,value,info}:{title:string,value:string,info:string}){
  return(
    <div className="rounded-[28px] border theme-border theme-card backdrop-blur-xl theme-shadow p-6 md:p-7 flex flex-col gap-3 hover:border-purple-400/40 hover:bg-purple-500/[0.06] transition-all duration-300">
      <p className="theme-text-soft text-[13px] uppercase tracking-[2px]">{title}</p>
      <h3 className="text-[20px] md:text-[24px] font-bold theme-text-strong break-words">{value}</h3>
      <p className="theme-text-soft text-[14px] md:text-[15px]">{info}</p>
    </div>
  )
}

function Tag({text}:{text:string}){
  return(
    <span className="px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/[0.08] text-indigo-200 text-[13px]">
      {text}
    </span>
  )
}