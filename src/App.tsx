import {HashRouter, Route, Routes} from "react-router";
import Home from './pages/Home';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import { useEffect, } from "react";
import { useLocation } from "react-router";
import AnimateRoutes from "./components/AnimateRoutes";
function App() {

    // ensure Nav is typed to accept the sidebar setter prop
  function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

  return (
    <div className="w-full h-auto p-[2%] bg-linear-to-b from-[#010209] to-[#12041d] font-p">
      <HashRouter>
        <ScrollToTop />
        <AnimateRoutes />
        <Nav/>
        
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
