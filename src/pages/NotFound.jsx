import { useState } from 'react'
import About from "../components/about";
import Navbar from "../components/navbar";
import Card from "../components/card";
import styles from "../styles/card.module.css";
import Wrapper from "../components/wrapper";
import {Link} from "react-router-dom";

const NotFound = () => {

  return (
    <>
      <main className="corpse">
        <Wrapper>
          <h1>Error 404</h1>
          <h2>page not found</h2>
          <Link to="/">Go back to Home</Link>
        </Wrapper>
      </main>
    </>
  )
}

export default NotFound
