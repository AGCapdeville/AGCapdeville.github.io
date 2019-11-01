import React from 'react';
import NotFound from './NotFound';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class NavigationBar extends React.Component{
  render () {  
    return (
      <Router>
        <div>
          <nav>
            <ul class="nav-ul navbar-custom">
              <li>
                <NavLink
                  to="/Home"
                  activeClassName="selected"
                > Home 
                </NavLink>             
              </li>
              <li>
                <NavLink
                  to="/Portfolio"
                  activeClassName="selected"
                > Portfolio 
                </NavLink> 
              </li >
              <li>
                <NavLink
                  to="/Blog"
                  activeClassName="selected"
                > Blog 
                </NavLink>               
              </li>
              <li>
                <a
                className="App-link App-left"
                href="https://github.com/AGCapdeville/AGCapdeville.github.io"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <b>GitHub</b> Pages Repo
                </a>
              </li>
            </ul>
          </nav>
            
          <Switch>
            <Router path="/Home"> <Home /> </Router>
            <Router path="/Portfolio"> <Portfolio /> </Router>
            <Router path="/Blog"> <Blog /> </Router>
            <Router component={NotFound}/> 
          </Switch>

          </div>
        </Router> 
      )
  }
}

export default NavigationBar;