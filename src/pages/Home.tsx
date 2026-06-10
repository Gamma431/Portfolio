import Hero from "../components/homeSections/Hero";
import Section1 from "../components/homeSections/Section1";
import Section2 from "../components/homeSections/Section2";

export default function Home() {
  return (
    <div className="w-full h-auto p-[2%] bg-blackd">
        <Hero />
        <Section1 />
        <Section2 />
    </div>
  )
}
