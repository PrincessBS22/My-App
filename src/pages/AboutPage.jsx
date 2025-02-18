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

const AboutPage = () => {

  return (
    <>
      <main className="corpse">
        <Wrapper>
          <h1>Profiler App</h1>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
      </main>
    </>
  )
}

export default AboutPage
