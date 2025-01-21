import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from "./components/about";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Navbar from "./components/navbar";

const App = () => {
  return(
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <div className="section">
        <div className="container">
          <h1>Profiler App</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <About/>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="profile-cards">
              <Card1/>
              <Card2/>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
