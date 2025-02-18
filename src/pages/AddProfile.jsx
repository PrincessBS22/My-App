import { useState } from 'react'
import About from "../components/about";
import Navbar from "../components/navbar";
import Card from "../components/card";
import styles from "../styles/card.module.css";
import Wrapper from "../components/wrapper";
import ProfileForm from "../components/profileForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { use } from "react";

const AddProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  
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
    <>
      <main className="corpse">
        <Wrapper>
          <h1>Profiler App</h1>
        </Wrapper>
        <Wrapper>
          <ProfileForm />
        </Wrapper>
      </main>
    </>
  )
}

export default AddProfiles
