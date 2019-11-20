import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import Footer from './components/Footer.js';
import NotFound from './components/NotFound.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Githubhook from './components/Githubhook';

const App = () => {
  return(
    <Router>
      <div>
        <Nav/>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;