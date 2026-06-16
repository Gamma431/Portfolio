import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MessageSent from "../MessageSent";

export default function Section1() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_qs6wewv",
        "template_gpv9kfd",
        form.current,
        "GK6zfgxfh5N_i625Y"
      )
      .then(() => {
        setIsSent(true);
        form.current?.reset();
      })
      .catch((err) => {
        console.log(err);
        alert(err.text || "Something went wrong");
      });
  };

  return (
    <div className="w-full h-screen text-white/70 flex justify-center items-start text-[20px] gap-[2%] pb-[5.5%] pt-[5%] mb-[2%]">
      <div className="w-[50%] h-full p-[2%] rounded-4xl border border-white/10 shadow-2xl shadow-black flex flex-col gap-[2%] justify-center items-start bg-white/2">
        <div className="w-[20%] h-[5%] bg-linear-to-r from-blue-400 to-indigo-800 border border-white/30 rounded-2xl flex justify-center items-center text-[18px] text-shadow-lg">
          Get In Touch
        </div>
        <h2 className="text-[50px]">
          Lets build something amazing <strong className="color-p">together</strong>
        </h2>
        <p>
          Have an idea, a project, or just want to say hi?
          <br />
          Im always open to discussing new opportunities
          <br />
          and interesting projects
        </p>
        <div className="w-full h-[37%] flex flex-wrap justify-center items-center p-[1%] gap-[2%]">
          <div className="w-[49%] h-[45%] flex justify-center items-center text-xl rounded-2xl border border-white/10 bg-white/2 shadow-2xl shadow-black gap-[2%]">
            <img className="h-[40%]" src="https://img.icons8.com/?size=100&id=gqzoIBeh8sR2&format=png&color=000000" alt="" />
            <a  className="text-[14px]" href="CllgCJqWgvlkTCMqlxDjNVcHJSDhVBJBJwVqVttZxfqlGqfwSVWbzrbxHXCjdkHMScLTQvNXtnV">ghazaryanarman843@gmail.com</a>
        </div>
        <div className="w-[49%] h-[45%] flex justify-center items-center text-xl rounded-2xl border border-white/10 bg-white/2 shadow-2xl shadow-black gap-[2%]">
            <img className="h-[40%]" src="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000" alt="" />
            <a href="https://github.com/Gamma431">Gamma431 </a>
        </div>
        <div className="w-[49%] h-[45%] flex justify-center items-center text-xl rounded-2xl border border-white/10 bg-white/2 shadow-2xl shadow-black gap-[2%]">
            <img className="h-[40%]" src="https://img.icons8.com/?size=100&id=LTvptsXhcJki&format=png&color=000000" alt="" />
            <a >@ZaSekai</a>
        </div>
        <div className="w-[49%] h-[45%] flex justify-center items-center text-xl rounded-2xl border border-white/10 bg-white/2 shadow-2xl shadow-black gap-[2%]">
            <img className="h-[40%]" src="https://img.icons8.com/?size=100&id=ZyMOv5S0hHtV&format=png&color=000000" alt="" />
            Arman Ghazaryan
        </div>
        </div>
        <div className="w-full h-[15%] flex border border-white/10 rounded-2xl shadow-2xl justify-evenly items-center py-[3%]">
          <div className="w-20 h-20 bg-green-600/10 shadow-2xl shadow-black rounded-[1000px] flex justify-center items-center">
            <div className="w-6 h-6 bg-green-600 shadow-xl shadow-black rounded-[1000px]"></div>
          </div>
          <div className="w-[40%] h-full flex flex-col justify-center items-start">
            <strong className="text-white text-[16px]">Currently avaible for work</strong>
            <p className="text-[16px]">Open to Freelance projects and full-time oppertunities</p>
          </div>
          <button className="w-[30%] h-full rounded-2xl shadow-2xl border border-indigo-500/70 bg-indigo-500/10">
            View Resume
          </button>
        </div>
      </div>

      <div className="w-[50%] h-full p-[2%] rounded-4xl border border-white/10 shadow-2xl shadow-black flex flex-col gap-[3%] justify-center items-center bg-white/2">
        {isSent ? (
          <MessageSent />
        ) : (
          <>
            <h3 className="text-[40px] text-white">Send me a message</h3>
            <p className="text-[16px] text-white/50">
              I'll get back to you as soon as possible.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full h-[80%] flex flex-col gap-[4%] justify-center"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full h-[12%] rounded-3xl border border-white/10 bg-white/5 px-[5%] outline-none backdrop-blur-md placeholder:text-white/40"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full h-[12%] rounded-3xl border border-white/10 bg-white/5 px-[5%] outline-none backdrop-blur-md placeholder:text-white/40"
                required
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                className="w-full h-[40%] rounded-3xl border border-white/10 bg-white/5 p-[5%] outline-none resize-none backdrop-blur-md placeholder:text-white/40"
                required
              />
              <button
                type="submit"
                className="w-full h-[12%] rounded-3xl border border-indigo-500/50 bg-linear-to-r from-blue-500/20 to-indigo-500/20 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}