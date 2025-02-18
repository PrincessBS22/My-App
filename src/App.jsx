import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from "./components/about";
import Navbar from "./components/navbar";
import { HashRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AddProfile from "./pages/AddProfile";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";


const App = () => {

  // //store animation state
  // const [animation, setAnimation] = useState(false);
  // const handleAnimation = () =>{
  //   setAnimation(false);}

  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    if(!darkMode){
      document.body.classList.add("darkMode")
    }
    else{
      document.body.classList.remove("darkMode")
    }
    setDarkMode(!darkMode);
  };
  
  return (
    <HashRouter>
      <header>
        <Navbar darkMode={darkMode} onClick={handleClick}/>
      </header>
      <main className="corpse">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-profile" element={<AddProfile />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
