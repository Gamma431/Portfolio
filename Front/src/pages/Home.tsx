import Hero from "../components/homeSections/Hero";
import Section1 from "../components/homeSections/Section1";
import Section2 from "../components/homeSections/Section2";
import { motion } from "motion/react";



const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};


export default function Home() {
  return (
    <motion.div  variants={pageVariants} initial="initial"  animate="animate"  exit="exit" transition={{duration: 0.3, ease: "easeInOut",}} className="w-full h-auto p-[2%] ">
        <Hero />
        <Section1 />
        <Section2 />
    </motion.div>
  )
}
