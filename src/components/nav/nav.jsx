import React from "react";
import { Link, useLocation } from "react-router-dom";
import CurRepo from "../github/CurrentRepoHook";
import {
  navbar,
  navLink,
  navbarInnerContainer
} from "./nav.module.scss";

const Nav = () => {
  // const { pathname: path } = useLocation();

  // const getClassname = pathname => {
  //   return pathname === path ? activeLink : link;
  // };

  return (
    <div className={navbar}>
      <div className={navbarInnerContainer}> 
        <div className={navLink}>About</div>
        <div className={navLink}>Work</div>
        <div className={navLink}>Skills</div>
      </div>
    </div>
  );
};

export default Nav;
