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
import ProfileForm from "./components/profileForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { use } from "react";

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
  //get titles
  const [titles, setTitles] = useState([])
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~shaverb/get-titles.php")
    .then((res) => res.json())
    .then((data) => {
      setTitles(data.titles)
    })
  },[])
    // },[])
  const [title, setTitle] = useState("");
  //update title on change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
    setPage(1);
    //setAnimation(true);
  };
  //name search
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
    //setAnimation(true);
  };
  const handleClear = () => {
    setTitle("");
    setSearch("");
    setPage(1);
    //setAnimation(true);
  }
  
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
  fetch(`https://web.ics.purdue.edu/~shaverb/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`)
        .then(res => res.json())
        .then((data) => {
          setProfiles(data.profiles);
          setCount(data.count);
          setPage(data.page);
          console.log(page)
        })
      }, [title,search,page]);

  //filter the profiles based on the title
  // const filteredProfiles = profiles.filter((profile) =>
  //   // if(title===""){
  //   //   return true;
  //   // }
  //   // else{
  //   //   return profile.title === title;
  //   // }
  //   (title === "" || profile.title === title) && profile.name.toLowerCase().includes(search.toLowerCase())
  // );


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
          <ProfileForm />
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
            {profiles.map((profile) =>
              (<Card key={profile.id} {...profile}/>))}
          </div>
          {count===0 && <p>No profiles found!</p>}
          {count > 10 &&
          <div className="pageinator">
              <button onClick={() => {setPage(pre=>pre-1);console.log(page)} } disabled={page===1}><FontAwesomeIcon icon={faChevronLeft} /></button>
              <span>{page}/{Math.ceil(count/10)}</span>
              <button onClick={() => {setPage(pre=>pre+1);console.log(page)} } disabled={page>=Math.ceil(count/10)}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>}
        </Wrapper>
      </main>
    </>
  )
}

export default App
