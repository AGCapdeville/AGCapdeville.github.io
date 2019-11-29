import React from "react";
import { Link, useLocation } from "react-router-dom";
import CurRepo from "../github/CurrentRepoHook";
import {
  navbar,
  navbarOp,
  navbarAlignRight,
  link,
  activeLink
} from "./nav.module.scss";

const Nav = () => {
  const { pathname: path } = useLocation();

  const getClassname = pathname => {
    return pathname === path ? activeLink : link;
  };

  return (
    <div className={navbar}>
      <div className={navbarOp}>
        <Link to="/" className={getClassname("/")}>
          Home
        </Link>
        <Link to="/portfolio" className={getClassname("/portfolio")}>
          Portfolio
        </Link>
      </div>
      <div className={navbarAlignRight}>
        <CurRepo />
      </div>
    </div>
  );
};

export default Nav;
