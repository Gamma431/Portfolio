import {HashRouter} from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect, } from "react";
import { useLocation } from "react-router";
import AnimateRoutes from "./components/AnimateRoutes";
function App() {


useEffect(() => {
  fetch("http://localhost:3001/api/stats")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}, []);

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
