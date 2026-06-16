import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import Stats from "../pages/Stats";

export default function AnimateRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/stats" element={<Stats />} />
         <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </AnimatePresence>
  );
}