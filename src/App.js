import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="https://i.imgur.com/eDmARH5.jpg" class="img-circle"/>
        <p>
          Adam Capdeville
        </p>
        <a
          className="App-link"
          href="https://github.com/AGCapdeville/AGCapdeville.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>GitHub</b> Pages Repo
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
