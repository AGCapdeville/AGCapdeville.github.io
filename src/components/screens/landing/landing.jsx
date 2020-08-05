import React, { useState, useRef, useEffect } from 'react'
import { descrip, languages, frameworks, databases, mySystemText, darumaInfo, darumaWhy, darumaQuote } from '../../../data/data'
import { useDispatch } from 'react-redux'
import ScrollTrigger from 'react-scroll-trigger'
import { GoQuote } from 'react-icons/go'
import { FiMail } from 'react-icons/fi'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'
import darumaImg from '../../../daruma.png'

import {
  Navbar,
  Nav,
  Button,
  Row,
  Fade,
} from 'react-bootstrap'

import style from './landing.module.scss'
import systemStyle from './systemSection.module.scss';

import './fadeIn.css'

import Space from '../../space';
import Footer from '../../footer';

import { useNav, setActiveNav } from '../../../ducks/nav';
import { white, green } from "color-name";

import CurrentRepo from '../../currentRepo/currentRepo.jsx';

import GitHub from '../../github'

const Language = (language) => <li>{language}</li>;
const Framework = (framework) => <li>{framework}</li>;
const Database = (database) => <li>{database}</li>;


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  })
}

const Home = () => {


  const [darumaText, setDarumaText] = useState(true);
  const [darumaWhyText, setWhyText] = useState(false);
  const [darumaWhatText, setWhatText] = useState(false);

  const toggleDarumaText = (text) => {
    console.log('toggle:', text);
    switch (text) {
      case 'daruma':
        setDarumaText(true);
        setWhyText(false);
        setWhatText(false);
        console.log('inside: daruma');
        break;

      case 'why':
        setDarumaText(false);
        setWhyText(true);
        setWhatText(false);
        console.log('inside: why');
        break;

      case 'what':
        setDarumaText(false);
        setWhyText(false);
        setWhatText(true);
        console.log('inside: what');
        break;

      default:
        break;
    }
  }

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const systemRef = useRef(null)
  const influentialRef = useRef(null)
  const contactRef = useRef(null)

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
          <Nav.Link eventKey="5" className={style.navLink} onClick={() => scrollToRef(contactRef)}>Contact.</Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className={style.screenContainer}>

        <section ref={aboutRef} id='About' className={style.aboutSection}>
          <strong className={style.sectionTitle}>About.</strong>
          <div className={style.profileImage}>
            <img
              src="https://i.imgur.com/NYjsR8e.jpg"
              // className="rounded-circle"
              alt="profile img"
            />
          </div>

          <div className={style.centerText}>
            <p>{descrip}</p>
          </div>

        </section>

        <section ref={workRef} id='Work' className={style.workSection}>
          <br />
          <strong className={style.sectionTitle}>Work.</strong>
          <br />
          <CurrentRepo />
          <br />
          <GitHub />
        </section>

        <section ref={systemRef} id='System' className={systemStyle.systemSection}>
          <strong className={style.sectionTitle}>My System.</strong>
          <br />

          {mySystemText.map(line => (
            <div className={'box'}>
              <FadeInSection key={line}>
                <strong className={systemStyle.mySystemText}>{line}</strong>
              </FadeInSection>
            </div>
          ))}


          <div className={systemStyle.daruma_container}>
            <img src={darumaImg} className={systemStyle.daruma} />
            <div className={systemStyle.daruma_shadow_container} >
              <div className={systemStyle.daruma_shadow} />
              <div className={systemStyle.daruma_shadow_m} />
            </div>
          </div>

          <div className={systemStyle.darumaToggleInfoOuterContainer}>

            <div className={systemStyle.darumaToggleButtonsContainer}>
              <button
                  onClick={() => toggleDarumaText('daruma')}
                  aria-controls="darumaText"
                  aria-expanded={darumaText}
                  className={systemStyle.darumaToggleButton}
                  opacity={darumaText}
                >
                  Daruma Proverb.
              </button>
                
              <button
                onClick={() => toggleDarumaText('what')}
                aria-controls="darumaWhatText"
                aria-expanded={darumaWhatText}
                className={systemStyle.darumaToggleButton}
              >
                What Is Daruma?
              </button>

              <button
                onClick={() => toggleDarumaText('why')}
                aria-controls="darumaWhyText"
                aria-expanded={darumaWhyText}
                className={systemStyle.darumaToggleButton}
              >
                Why Daruma?
              </button>
            </div>
            
            <div className={systemStyle.darumaToggleInfoContainer}>
              <Fade in={darumaWhatText}>
                <div id='darumaWhatText' className={systemStyle.darumaToggleInfo}>
                  <strong>What Is A Daruma doll?</strong>
                  <p>{darumaInfo}</p>
                </div>
              </Fade>
              <Fade in={darumaText}>
                <div id="darumaText" className={systemStyle.darumaToggleInfo}>
                  <div>
                    <div className={systemStyle.darumaQuote}>
                      <div className={systemStyle.leftQuote}>
                        <GoQuote />
                      </div>
                      <div className={systemStyle.darumaQuoteText}>
                        <div>{darumaQuote[0]}</div>
                        <div>{darumaQuote[1]}</div>
                      </div>
                      <div className={systemStyle.rightQuote}>
                        <GoQuote />
                      </div>
                    </div>
                    <div className={systemStyle.darumaQuoteEnd}>
                      <strong className={systemStyle.darumaQuoteEnd}>{darumaQuote[3]}</strong>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade in={darumaWhyText}>
                <div id='darumaWhyText' className={systemStyle.darumaToggleInfo}>
                  <strong>Why The Daruma doll?</strong>
                  <p>{darumaWhy}</p>
                </div>
              </Fade>
            </div>
          </div>

        </section>

        {/* <section ref={influentialRef} id='Influential' className={style.influentialSection}>
          <strong className={style.sectionTitle}>Influential</strong>
        </section> */}

        <section ref={contactRef} id='Contact' className={style.contactSection}>
          <div className={style.sectionTitle}>Lets connect,</div>
          <Row className={style.contactIconContainer}>
            <div
              className={style.contactIcon} style={{backgroundColor:'#08a0e9'}}
              onClick={() => window.location.href = "mailto:agcapdeville@gmail.com"} target="_blank" >
              <FiMail className={style.icon} />
            </div>
            <a
              className={style.contactIcon} style={{backgroundColor:'dodgerblue'}}
              href="https://www.facebook.com/adam.capdeville.90" target="_blank" >
              <TiSocialFacebook className={style.icon} />
            </a>
            <a
              className={style.contactIcon} style={{backgroundColor:'#0E76AE'}}
              href="https://www.linkedin.com/in/adamcapdeville/" target="_blank" >
              <TiSocialLinkedin className={style.icon} />
            </a>
            <a
              className={style.contactIcon} style={{backgroundColor:'purple'}}
              href="https://github.com/AGCapdeville" target="_blank" >
              <TiSocialGithub className={style.icon} />
            </a>
          </Row>
        </section>

      </div>
      <Footer />


    </div>
  )
}
export default Home;
