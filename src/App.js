import React from 'react';

import {Route} from 'react-router';

import Home from './components/screens/landing';
import Blogs from './components/screens/blogs';
import Blog from './components/screens/blog';

import { useNav } from './ducks/nav';

const sections = {
  Home,
  Blogs,
  Blog
}

const App = () => {
  const navigation = useNav();
  const Navivation = sections[navigation];
  return <Navivation />
}

export default App;