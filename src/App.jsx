import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from "./components/about";
import Navbar from "./components/navbar";
import img_1 from "./assets/20231121_145928.jpg";
import img_2 from "./assets/maxresdefault.jpg";
import Card from "./components/card";
import styles from "./styles/card.module.css";
import Wrapper from "./components/wrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const profiles = [{
    img: img_1,
    name: 'Jane Doe',
    title: 'Engineer',
    email: 'rar@gmail.com'
  }, {
    img: img_2,
    name: 'John Smith',
    title: 'Social Media Manager',
    email: 'json@gmail.com'
  }, {
    img: img_1,
    name: 'Jane Deer',
    title: 'CEO',
    email: 'js@gmail.com'
  }, {
    img: img_2,
    name: 'Steve Smith',
    title: 'Social Media Creator',
    email: 'jsx@gmail.com'
  }, {
    img: img_1,
    name: 'Barbra Buck',
    title: 'Engineer',
    email: 'html@gmail.com'
  }, {
    img: img_2,
    name: 'Dan Johnson',
    title: 'Designer',
    email: 'css@gmail.com'
  }]

  //store animation state
  const [animation, setAnimation] = useState(false);
  const handleAnimation = () =>{
    setAnimation(false);}

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
  //get titles
  const titles = [...new Set(profiles.map((profile) => profile.title))];
  const [title, setTitle] = useState("");
  //update title on change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
    setAnimation(true);
  };
  //name search
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setAnimation(true);
  };
  const handleClear = () => {
    setTitle("");
    setSearch("");
    setAnimation(true);
  }
  //filter the profiles based on the title
  const filteredProfiles = profiles.filter((profile) =>
    // if(title===""){
    //   return true;
    // }
    // else{
    //   return profile.title === title;
    // }
    (title === "" || profile.title === title) && profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header>
        <Navbar darkMode={darkMode} onClick={handleClick}/>
      </header>
      <main className="corpse">
        <Wrapper>
          <h1>Profiler App</h1>
          {/* <button onClick={handleClick}>
            {clicked ? "Clicked" : "Click me"}
          </button> */}
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <div className="filter-wrapper">
            <div className="filter-select">
              <label htmlFor="title-select">Select a Job Title: </label>
              <select id="title-select" onChange={handleTitleChange} value={title}>
                <option value="">All</option>
                {titles.map((title) => (<option key={title} value={title}>{title}</option>))};
              </select>
            </div>
            <div className="filter-search">
              <label htmlFor="search">Search by Name: </label>
              <input type="search" id="search" onChange={handleSearchChange} value={search}/>
              <button onClick={handleClear}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
          <div className={styles["profile-cards"]}>
            {filteredProfiles.map((profile) =>
              (<Card key={profile.email} {...profile} animate={animation} updateAnimate={handleAnimation}/>))}
          </div>
        </Wrapper>
      </main>
    </>
  )
}

export default App
