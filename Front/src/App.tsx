import {useEffect,useState} from "react"
import {HashRouter,useLocation} from "react-router"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import AnimateRoutes from "./components/AnimateRoutes"

function ScrollToTop(){
  const {pathname}=useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return null
}

export default function App(){
  const [dark,setDark]=useState(true)

  useEffect(()=>{
    fetch("https://portfolioback-oh5r.onrender.com/api/stats")
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  },[])

  return(
    <div className={
dark
? "theme-dark min-h-screen transition-all duration-300"
: "theme-light min-h-screen transition-all duration-300"
}>
      <HashRouter>
        <ScrollToTop/>
        <Nav dark={dark} setDark={setDark}/>
        <AnimateRoutes/>
        <Footer/>
      </HashRouter>
    </div>
  )
}