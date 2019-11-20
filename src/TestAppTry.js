import React, { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';


import { BrowserRouter as Router, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import styles from './app.module.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/portfolio';

   
const App = () => {
  useEffect( () => {
    let ignore = false;
    const fetchData = async () => {
      const result = await axios(`https://api.github.com/users/${username}`);
      if(!ignore) {
        setData(result);
      }
    }
    fetchData();
    return () => { ignore = true; }
  }, [githubData])

  return(
    <div>
        <Nav />
        <Footer />
    </div>
  );
}


export default App;
