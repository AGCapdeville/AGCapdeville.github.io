import React from "react";
import { descrip, languages, frameworks, databases } from "../../data/data";

import {
  profileImage,
  body,
  name,
  about,
  listTitle,
  listContainer,
  list
} from "./home.module.scss";

const Language = (language) => <li>{language}</li>;
const Framework = (framework) => <li>{framework}</li>;
const Database = (database) => <li>{database}</li>;

const Home = () => (
  <div className={body}>
    <div className={profileImage}>
      <img
        src="https://i.imgur.com/eDmARH5.jpg"
        className="rounded-circle"
        alt="profile img"
      />
    </div>
    <div className={name}>Adam G Capdeville</div>
    <div className={about}>
      <p>{descrip}</p>
    </div>

    <div className={name}>
        <b>Skills</b>
    </div>

    <div className={listContainer}>
      <div className={list}>
        <div className={listTitle}> Languages </div>
          {languages.map(Language)}
      </div>
      <div className={list}>
        <div className={listTitle}> Frameworks & Libraries </div>
        {frameworks.map(Framework)}
      </div>
      <div className={list}>
        <div className={listTitle}> Database </div>
        {databases.map(Database)}
      </div>
    </div>
    
  </div>
);

export default Home;
