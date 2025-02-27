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
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import {ModeProvider} from "./contexts/ModeContext";
import ModeContext from "./contexts/ModeContext";
import {AuthProvider} from "./contexts/AuthContext";
import AuthContext from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


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
    <AuthProvider>
    <HashRouter>
      <header>
        <Navbar/>
      </header>

      <main className={`${(mode === "dark"? document.body.classList.remove("darkMode") : document.body.classList.add("darkMode")), "corpse"}`}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-profile" element={<ProtectedRoute><AddProfile /></ProtectedRoute>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="profile/:id" element={<ProfileLayoutPage/>}>
          <Route index element={<ProfileDetailPage/>}/>
          <Route path="edit" element={<ProtectedRoute><ProfileEditPage/></ProtectedRoute>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </HashRouter>
    </AuthProvider>
  )
}

export default App
