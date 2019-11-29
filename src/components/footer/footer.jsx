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
        href="https://www.https://github.com/AGCapdeville/AGCapdeville.github.io"
      >
        Source
      </a>
      |{" "}
      <a className={link} href="https://www.linkedin.com/in/adamcapdeville/">
        Linkedin
      </a>
      |{" "}
      <a className={link} href="https://github.com/AGCapdeville/">
        GitHub
      </a>
    </div>
  );
};

export default Footer;
