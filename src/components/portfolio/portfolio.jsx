import React from "react";
// TODO: remove App.css, convert Portfolio to folder with Portfolio .js .jsx & .scss files
import { moduleBody } from "./portfolio.module.scss";

const portfolio = () => {
  return (
    <div className={moduleBody}>
      <header>
        <div style={{ float: "center", paddingTop: "20px" }}>
          <h1>[Portfolio] TBD ...</h1>
        </div>
      </header>
    </div>
  );
};

export default portfolio;
