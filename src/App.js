import React from 'react';
import styles from './app.module.scss';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Portfolio from './components/portfolio';
import FoF from './components/fof';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Nav />
        <div className={styles.app}>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={FoF} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;