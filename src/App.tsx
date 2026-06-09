import {HashRouter, Route, Routes} from "react-router";
import Home from './pages/Home';
import Nav from "./components/Nav";

function App() {

  return (
    <div className="w-full h-auto p-[2%] bg-black/98 font-p">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
