import React from "react";
import './App.css';
import Footer from './Footer.js';

class Home extends React.Component {
    render() {
        return(
            <body class='Text_color_offwhite'>
                <header class='App-body'>
                    <div class='Section_color'>
                        <div class='App-img'>
                            <img src="https://i.imgur.com/eDmARH5.jpg" class="rounded-circle"/>
                        </div>
                        <div class='MainTitle'>
                            Adam Capdeville
                        </div> 
                    </div>
                    <div className='App-description'>
                        <p>
                            Currently I am a computer science student at CSUCI 
                            who has a passion for intelligent code, whether it's 
                            intelligently written or written to exhibit intelligence. 
                        </p>
                    </div>

                    <div>
                        <div className="Title"> <b>Skills</b> </div>
                        <div className='grid-hero'>
                            <div class='SubTitle'> Languages </div> 
                            <div class='SubTitle'> Frameworks & Libraries </div>
                            <div class='SubTitle'> Database </div>
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

            </body>
        )
    }
}

export default Home


