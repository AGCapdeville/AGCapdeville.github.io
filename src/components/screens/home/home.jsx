import React, {useRef, useEffect} from "react";
import { descrip, languages, frameworks, databases } from "../../../data/data"

import {
  profileImage,
  body,
  aboutSection,
  portfolioSection,
  sectionTitle,
  centerText,
  continueButton,
  landingContainer,
  screenContainer,
} from "./home.module.scss";

import Space from '../../space';
import NavBar from '../../nav';

const Language = (language) => <li>{language}</li>;
const Framework = (framework) => <li>{framework}</li>;
const Database = (database) => <li>{database}</li>;



const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'     
  })
}  


const Home = () => {

  const myRef = useRef(null)
  const portfolioRef = useRef(null)

  return(
    <div className={body}>

      <div>
        <div className={landingContainer}>
          <div>Hello, I'm Adam Capdeville.</div>
          <div>I'm a full-stack software engineer.</div>
          <button className={continueButton} onClick={()=>scrollToRef(myRef)} >
            continue
          </button>
        </div>

        <Space/>
      </div>

      <NavBar/>
      
      <div className={screenContainer}>

        <section ref={myRef} id='About' className={aboutSection}>
          <strong className={sectionTitle}>About</strong>
          <div className={profileImage}>
            <img
              src="https://i.imgur.com/NYjsR8e.jpg"
              className="rounded-circle"
              alt="profile img"
            />
          </div>

          <div className={centerText}>
            <p>{descrip}</p>
          </div>

          <button className={continueButton} onClick={()=>scrollToRef(portfolioRef)} >
            continue
          </button>

        </section>
        
        <section ref={portfolioRef} id='Portfolio' className={portfolioSection}>
          <strong className={sectionTitle}>Portfolio</strong>
        </section>
      
      </div>
      
    </div>
  )
}
export default Home;
