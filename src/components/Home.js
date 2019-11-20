import React from "react";
// TODO: remove App.css, convert Home to Home folder with Home .js .jsx & .scss files
import '../App.css'; 
import Githubhook from './Githubhook';


import {descrip} from '../data/data.js'
const Home = () => (
    <div className='Text_color_offwhite'>
        <header className='App-body'>
            <div className='Section_color'>
                <div className='App-img'>
                    <img src="https://i.imgur.com/eDmARH5.jpg" className="rounded-circle" alt="profile img"/>
                </div>
                <div className='MainTitle'>
                    Adam G Capdeville
                </div>
            </div>
            <div className='App-description'>
                <p>
                    <div> {descrip} </div> 
                </p>
            </div>
            <div>
                <p><Githubhook/></p>
            </div>

            <div className='SkillSection' >
                <div className="Title"> <b>Skills</b> </div>
                <div className='grid-hero'>
                    <div className='SubTitle'> Languages </div> 
                    <div className='SubTitle'> Frameworks & Libraries </div>
                    <div className='SubTitle'> Database </div>
                    <ul> 
                        <li>Java</li>
                        <li>C / C++</li>
                        <li>C#</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        </ul>
                    <ul> 
                        <li>React</li>
                        <li>React-Native</li>
                        <li>Bootstrap</li>
                        </ul>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
        </header>

    </div>
)

export default Home


