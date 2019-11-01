import React from 'react';
import './App.css';

class Blog extends React.Component {
    render () {
      return( 
        <div className="App-body">
            <header className="App-header Section_color_grey" >
                <div bg-dark style={{float : 'center', paddingTop : '20px'}}>
                    <h1>Blog</h1>
                </div>
            </header>
        </div>
        )
        
    }
}

export default Blog