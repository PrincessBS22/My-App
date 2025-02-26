import { useState, useEffect, useContext } from 'react';
import './App.css';
import About from "./components/about";
import Navbar from "./components/navbar";
import { HashRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AddProfile from "./pages/AddProfile";
import HomePage from "./pages/HomePage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import ProfileLayoutPage from "./pages/ProfileLayoutPage";
import NotFound from "./pages/NotFound";
import {ModeProvider} from "./contexts/ModeContext";
import ModeContext from "./contexts/ModeContext";


const App = () => {
  const {mode} = useContext(ModeContext);

  // const [darkMode, setDarkMode] = useState(false);
  // const handleClick = () => {
  //   if(!darkMode){
  //     document.body.classList.add("darkMode")
  //   }
  //   else{
  //     document.body.classList.remove("darkMode")
  //   }
  //   setDarkMode(!darkMode);
  // };
  
  return (
    
    <HashRouter>
      <header>
        <Navbar/>
      </header>

      <main className={`${(mode === "dark"? document.body.classList.remove("darkMode") : document.body.classList.add("darkMode")), "corpse"}`}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-profile" element={<AddProfile />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="profile/:id" element={<ProfileLayoutPage/>}>
          <Route index element={<ProfileDetailPage/>}/>
          <Route path="edit" element={<ProfileEditPage/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </HashRouter>
    
  )
}

export default App
