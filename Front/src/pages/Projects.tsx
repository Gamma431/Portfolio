import { motion } from "motion/react"
import Section1 from "../components/projectSections/Section1";

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

export default function Projects() {
  return (
    <motion.div  variants={pageVariants} initial="initial"  animate="animate"  exit="exit" transition={{duration: 0.3, ease: "easeInOut",}} className="w-full h-auto p-[2%] text-white/70 pt-[7%]" >
      <h1 className="text-[40px] text-center">My Projects</h1>
      <p className="text-[25px] w-[40%] mx-[30%]">Quick Check on my projects and find out my taste on design and <strong className="color-s">love to web development</strong></p>

      <Section1 />
    </motion.div>
  )
}
