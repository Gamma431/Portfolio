import Section1 from "../components/contactSections/Section1";
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

export default function Contacts() {
  return (
    <motion.div  variants={pageVariants} initial="initial"  animate="animate"  exit="exit" transition={{duration: 0.3, ease: "easeInOut",}} className="w-full h-auto p-[2%] ">
        <Section1 />
    </motion.div>
  )
}
