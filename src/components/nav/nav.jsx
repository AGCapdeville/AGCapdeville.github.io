import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    container,
    name,
    links,
    link,
    activeLink,
    bars,
    show,
  } from './nav.module.scss';

const Nav = () => {

    const { pathname: path } = useLocation();
    
    const getClassname = (pathname) => {
        return pathname === path ? activeLink : link
    };

    return(
        <div className={container}>
            <div>
            <Link to="/" className={getClassname('/')}>Home</Link>
            </div>
            <div>
            <Link to="/portfolio" className={getClassname('/portfolio')}>Portfolio</Link>
            </div>
        </div>
    )
}

export default Nav;