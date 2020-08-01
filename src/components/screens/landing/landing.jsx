import React, { useState, useRef, useEffect } from "react";
import { descrip, languages, frameworks, databases } from "../../../data/data"
import { useDispatch } from 'react-redux';
import ScrollTrigger from "react-scroll-trigger";
import { GoMailRead } from 'react-icons/go';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'

// import { ReactComponent as ReactLogo } from '../../../daruma.svg';

import {
  Navbar,
  Nav,
  Button,
  Row,
  Col
} from 'react-bootstrap'

import style from './landing.module.scss'

import Space from '../../space';
import Footer from '../../footer';

import { useNav, setActiveNav } from '../../../ducks/nav';
import { white, green } from "color-name";

import CurrentRepo from '../../currentRepo/currentRepo.jsx';

import GitHub from '../../github'

const Language = (language) => <li>{language}</li>;
const Framework = (framework) => <li>{framework}</li>;
const Database = (database) => <li>{database}</li>;



// const navbarHeight = 56;

const scrollToRef = (ref) => {
  window.scrollTo({
    // top: ref.current.offsetTop - navbarHeight,
    top: ref.current.offsetTop,
    behavior: 'smooth'
  })
}



const Home = () => {

  // const dispatch = useDispatch();

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const systemRef = useRef(null)
  const influentialRef = useRef(null)
  const contactRef = useRef(null)

  const contactIconSize = '13vw';


  return (
    <div className={style.body}>

      <div>
        <div ref={homeRef} className={style.landingContainer}>
          <div>Hello, I'm <strong style={{ color: 'coral' }}>Adam Capdeville</strong>.</div>
          <div>I'm a full-stack software engineer.</div>
          <br />
          <button className={style.continueButton} onClick={() => {
            scrollToRef(aboutRef)
          }} >
            continue
          </button>
        </div>

        <Space />
      </div>

      <Navbar collapseOnSelect bsPrefix='navbar' expand="md" variant="dark" className={style.navbar}>
        <Navbar.Brand href="#home" >Adam Capdeville.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.navbarToggle} />
        <Navbar.Collapse id="responsive-navbar-nav" className={style.navbarColapse}>
          <Nav.Link eventKey="1" className={style.navLink} onClick={() => scrollToRef(homeRef)}>Home.</Nav.Link>
          <Nav.Link eventKey="2" className={style.navLink} onClick={() => scrollToRef(aboutRef)}>About.</Nav.Link>
          <Nav.Link eventKey="3" className={style.navLink} onClick={() => scrollToRef(workRef)}>Work.</Nav.Link>
          <Nav.Link eventKey="4" className={style.navLink} onClick={() => scrollToRef(systemRef)}>System.</Nav.Link>
          {/* <Nav.Link eventKey="5" className={style.navLink} onClick={() => scrollToRef(influentialRef)}>Influential.</Nav.Link> */}
          <Nav.Link eventKey="6" className={style.navLink} onClick={() => scrollToRef(contactRef)}>Contact.</Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className={style.screenContainer}>

        <section ref={aboutRef} id='About' className={style.aboutSection}>
          <strong className={style.sectionTitle}>About</strong>
          <div className={style.profileImage}>
            <img
              src="https://i.imgur.com/NYjsR8e.jpg"
              className="rounded-circle"
              alt="profile img"
            />
          </div>

          <div className={style.centerText}>
            <p>{descrip}</p>
          </div>

        </section>

        <section ref={workRef} id='Work' className={style.workSection}>
          <br />
          <strong className={style.sectionTitle}>- Work -</strong>
          <br />
          <CurrentRepo />
          <br />
          <GitHub />
        </section>

        <section ref={systemRef} id='System' className={style.systemSection}>
          <strong className={style.sectionTitle}>System</strong>
        </section>

        {/* <section ref={influentialRef} id='Influential' className={style.influentialSection}>
          <strong className={style.sectionTitle}>Influential</strong>
        </section> */}

        <section ref={contactRef} id='Contact' className={style.contactSection}>
          <div className={style.sectionTitle}>Lets connect,</div>
          <Row className={style.contactIconContainer}>
            <div
              className={style.contactIcon}
              onClick={() => window.location.href = "mailto:agcapdeville@gmail.com"} target="_blank" >
              <GoMailRead size={contactIconSize} />
            </div>
            <a
              className={style.contactIcon}
              href="https://www.facebook.com/adam.capdeville.90" target="_blank" >
              <TiSocialFacebook size={contactIconSize} />
            </a>
            <a
              className={style.contactIcon}
              href="https://www.linkedin.com/in/adamcapdeville/" target="_blank" >
                <TiSocialLinkedin size={contactIconSize}/>
            </a>
            <a
              className={style.contactIcon}
              href="https://github.com/AGCapdeville" target="_blank" >
              <TiSocialGithub size={contactIconSize} />
            </a>
          </Row>
        </section>

      </div>
      <Footer />


    </div>
  )
}
export default Home;
