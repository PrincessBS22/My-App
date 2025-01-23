import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from "./components/about";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Navbar from "./components/navbar";
import img_1 from "./assets/20231121_145928.jpg";
import img_2 from "./assets/maxresdefault.jpg";
import Card from "./components/card";
import Wrapper from "./components/wrapper";

const App = () => {
  const profiles = [{
    img: img_1,
    name: 'Jane Doe',
    title: 'Engineer',
    email: 'rar.gmail.com'
  }, {
    img: img_2,
    name: 'John Smith',
    title: 'Social Media Manager',
    email: 'json.gmail.com'
  }]

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profiler App</h1>
          <button onClick={handleClick}>
            {clicked ? "Clicked" : "Click me"}
          </button>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <div className="profile-cards">
            {profiles.map(profile => <Card key={profile.email} {...profile} />)}
          </div>
        </Wrapper>
      </main>
    </>
  )
}

export default App
