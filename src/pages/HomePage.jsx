import { useState } from 'react'
import Card from "../components/card";
import styles from "../styles/card.module.css";
import Wrapper from "../components/wrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { use } from "react";

const HomePage = () => {
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  // //store animation state
  // const [animation, setAnimation] = useState(false);
  // const handleAnimation = () =>{
  //   setAnimation(false);}

  //get titles
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~shaverb/get-titles.php")
    .then((res) => res.json())
    .then((data) => {
      setTitles(data.titles)
    })
  },[])
    // },[])
  //update title on change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
    setPage(1);
    //setAnimation(true);
  };
  //name search
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

  return (
    <>
      <main className="corpse">
        <Wrapper>
          <h1>Profiler App</h1>
          {/* <button onClick={handleClick}>
            {clicked ? "Clicked" : "Click me"}
          </button> */}
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
              (<Link to={`/profile/${profile.id}`} key={profile.id}>
                <Card key={profile.id} {...profile}/>
                </Link>
              ))}
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

export default HomePage
