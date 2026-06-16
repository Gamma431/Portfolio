import Section1 from "../components/aboutSections/Section1";
import Section2 from "../components/aboutSections/Section2";
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

export default function About() {
  return (
     <motion.div  variants={pageVariants} initial="initial"  animate="animate"  exit="exit" transition={{duration: 0.3, ease: "easeInOut",}} className="w-full h-auto p-[2%] ">
      <Section1 />
      <Section2 />
    </motion.div>
  )
}
