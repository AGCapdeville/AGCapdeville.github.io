import React from "react";
// TODO: remove App.css, convert Portfolio to folder with Portfolio .js .jsx & .scss files
import { moduleBody, item, title} from "./portfolio.module.scss";

const portfolio = () => {
  return (
    <div className={moduleBody}>
      <div className={item}>
        <div className={title}> Coming soon...</div>
        <h4>For now check out my <a href={"https://github.com/AGCapdeville"} target="_blank"> GitHub </a> </h4>
      </div>
    </div>
  );
};

export default portfolio;
