import React from "react";
import { container, link } from "./footer.module.scss";
import { MdCopyright } from 'react-icons/md';


const year = new Date().getFullYear();
const preserve = 'Adam Capdeville ';

const Footer = () => {
  return (
    <div className={container}>
      {preserve}<MdCopyright /> {` ${year}`}
      {' | '}
      <a
        className={link}
        href="https://www.https://github.com/AGCapdeville/AGCapdeville.github.io" target="_blank" >
        Source
      </a>
    </div>
  );
};

export default Footer;
