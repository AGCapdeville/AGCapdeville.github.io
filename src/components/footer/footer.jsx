import React from "react";
import { container, link } from "./footer.module.scss";

const year = new Date().getFullYear();
const preserve = `Adam Capdeville ${year} `;

const Footer = () => {
  return (
    <div className={container}>
      {preserve}|{" "}
      <a
        className={link}
        href="https://www.https://github.com/AGCapdeville/AGCapdeville.github.io" target="_blank" >
        Source
      </a>
      |{" "}
      <a className={link} 
      href="https://www.linkedin.com/in/adamcapdeville/" target="_blank" >
        Linkedin
      </a>
      |{" "}
      <a className={link} href="https://github.com/AGCapdeville/" target="_blank" >
        GitHub
      </a>
    </div>
  );
};

export default Footer;
