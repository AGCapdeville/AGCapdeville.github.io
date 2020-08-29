import React from 'react';

// import {Route} from 'react-router';
import { useDispatch } from 'react-redux'


import Home from './components/screens/landing';
import Blogs from './components/screens/blogs';
import Blog from './components/screens/blog';

import { useNav, setActiveNav } from './ducks/nav';


const sections = {
  Home,
  Blogs,
  Blog
}


const App = () => {
  const navigation = useNav();

  var pathArray = window.location.pathname.split('/');
  console.log('path:', pathArray[1])

  const dispatch = useDispatch();

  if ( pathArray[1] === 'blog' ){
    dispatch(setActiveNav('Blog')) 
   }

  const Navivation = sections[navigation];
  return <Navivation />
}

export default App;