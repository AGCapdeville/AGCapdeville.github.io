import React from "react";
import { descrip } from "../../data/data";

import {
  profileImage,
  body,
  gridHero,
  title,
  subTitle,
  about,
  skills
} from "./home.module.scss";

const Home = () => (
  <div className={body}>
    <div className={profileImage}>
      <img
        src="https://i.imgur.com/eDmARH5.jpg"
        className="rounded-circle"
        alt="profile img"
      />
    </div>
    <div className={title}>Adam G Capdeville</div>
    <div className={about}>
      <p>{descrip}</p>
    </div>

    <div className={skills}>
      <div className={title}>
        {" "}
        <b>Skills</b>{" "}
      </div>
      <div className={gridHero}>
        <div className={subTitle}> Languages </div>
        <div className={subTitle}> Frameworks & Libraries </div>
        <div className={subTitle}> Database </div>
        <ul>
          <li>Java</li>
          <li>C / C++</li>
          <li>C#</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>JavaScript</li>
        </ul>
        <ul>
          <li>React</li>
          <li>React-Native</li>
          <li>Bootstrap</li>
        </ul>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Home;
