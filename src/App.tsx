import {HashRouter, Route, Routes} from "react-router";
import Home from './pages/Home';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {

  return (
    <div className="w-full h-auto p-[2%] bg-black/98 font-p">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
