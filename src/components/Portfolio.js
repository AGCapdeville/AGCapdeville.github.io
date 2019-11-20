import React from 'react';
// TODO: remove App.css, convert Portfolio to folder with Portfolio .js .jsx & .scss files
import '../App.css';

class Portfolio extends React.Component {
    render () {
      return( 
        <div className="App-body">
            <header className="App-body Section_color_grey" >
                <div style={{float : 'center', paddingTop : '20px'}}>
                    <h1>Portfolio</h1>
                </div>
            </header>
        </div>
        )      
    }
}

export default Portfolio