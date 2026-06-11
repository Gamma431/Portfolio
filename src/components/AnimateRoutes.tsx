import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

export default function AnimateRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}