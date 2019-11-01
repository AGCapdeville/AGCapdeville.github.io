import React from "react";
import './App.css';
import Footer from './Footer.js';

class Home extends React.Component {
    render() {
        return(
            <body class='Text_color_offwhite'>
                <header class='App-body'>
                    <div class='App-img'>
                        <img src="https://i.imgur.com/eDmARH5.jpg" class="rounded-circle"/>
                    </div>
                    <p>
                         
                        Adam Capdeville
                    </p> 

                    <div className='App-container'>
                        <p>
                            Currently I am a computer science student at CSUCI 
                            who has a passion for intelligent code, whether it's 
                            intelligently written or written to exhibit intelligence. 
                        </p>
                    </div>
                </header>

            </body>
        )
    }
}

export default Home


