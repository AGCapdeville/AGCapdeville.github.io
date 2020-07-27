import React from 'react';
import styles from './app.module.scss';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/screens/home';
import Portfolio from './components/screens/portfolio';
import FoF from './components/fof';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import SpaceTest from './components/space';


import { useScreen } from './ducks/screen';

const screens = {
  Home,
  Portfolio
}

const App = () => {
  const screen = useScreen();
  const Screen = screens[screen];
  return <Screen/>
}


export default App;