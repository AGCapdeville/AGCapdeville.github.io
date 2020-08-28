import React, { useState, useEffect } from "react";
import axios from "axios";
import { user } from "../../data/data";
import { Col } from "react-bootstrap";
import { DiJavascript1 } from "react-icons/di";
import { DiJava, DiPython } from "react-icons/di";

import style from "./github.module.scss";

const useGithubApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      axios({
        method: "get",
        url: url,
      })
        .then((res) => {
          console.log(" Response: \n", res);
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
        });
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }];
};

function iNewestRepo(obj) {
  var numRepos = Object.keys(obj).length;
  var curRepo = 0;
  var curDate = new Date(obj[curRepo]["updated_at"]);
  var indexDate = new Date(obj[0]["updated_at"]);
  var i = 0;
  for (i = 0; i < numRepos; i++) {
    indexDate = new Date(obj[i]["updated_at"]);
    if (indexDate > curDate) {
      curDate = indexDate;
      curRepo = i;
    }
  }
  return curRepo;
}

function getMonthName(monthNumber) {
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return month[monthNumber];
}

export default () => {
  var url = `https://api.github.com/users/${user}/starred`;
  const [{ data, isLoading }] = useGithubApi(url);

  if (isLoading) {
    return "loading...";
  } else {
    var current = iNewestRepo(data);
    var link = `https://github.com/${user}/${data[current]["name"]}`;

    // const d = new Date(Date.parse(data[current]["updated_at"]));
    // const day = d.getDate();
    // const monthName = getMonthName(d.getMonth());
    // const year = d.getFullYear();

    // const updated = `${monthName}, ${day}, ${year}`;

    // console.log('github obj:',current)

    const languageIcon = (language) => {
      switch (language) {
        case "JavaScript":
          return (
            <div className={style.languageIconContainer}>
              <DiJavascript1 className={style.languageIcon} />
            </div>
          );
        case "Python":
          return (
            <div className={style.languageIconContainer}>
              <DiPython className={style.languageIcon} />
            </div>
          );
        case "Java":
          return (
            <div className={style.languageIconContainer}>
              <DiJava className={style.languageIcon} />
            </div>
          );

        default:
          return (
            <div className={style.languageIconContainer}>
              <div className={style.languageIconDefault}> {language} </div>
            </div>
          );
      }
    };

    return (
      <div className={style.reposContainer}>
        {data.map((repo, index) => {
          if (repo.description != null) {
            return (
              <a key={index} href={repo.html_url} target="_blank">
                <div className={style.repoCard}>
                  <div className={style.repoTitle}>{repo.name}</div>
                  <div className={style.repoImage}>
                    {languageIcon(repo.language)}
                  </div>
                  <div className={style.repoText}>{repo.description}</div>
                </div>
              </a>
            );
          }
        })}
      </div>
    );

    //   <div className={container}>
    //     <div className={text} > CURRENTLY WORKING ON: </div>
    //     <div className={repoRow}>
    //       {/* <div className={blinkyGreen} /> */}
    //       [<a href={link} target="_blank"> {data[current]["name"]} </a>]
    //     </div>
    //     <div className={dateRow}>
    //       Updated: [<div className={dateText}> {updated} </div>]
    //     </div>
    //   </div>
    // )
  }
};
