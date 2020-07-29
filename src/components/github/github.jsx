import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { blinkyGreen, container, dateText, repoRow, dateRow, text } from './github.module.scss';
import { user } from '../../data/data'

const useGithubApi = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      axios(
        {
          method: "get",
          url: url,
        }
      )
        .then(res => {
          console.log(" Response: \n", res);
          setData(res.data);
          setIsLoading(false);
        })
        .catch(err => {
          setIsError(true);
        });
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }];
}

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
  return (curRepo);
}

function getMonthName(monthNumber) {
  var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return (month[monthNumber]);
}

export default () => {
  var url = `https://api.github.com/users/${user}/repos`;
  const [{ data, isLoading }] = useGithubApi(url);

  if (isLoading) {
    return ("loading...");
  } else {
    var current = iNewestRepo(data);
    var link = `https://github.com/${user}/${data[current]["name"]}`;


    // const d = new Date(Date.parse(data[current]["updated_at"]));
    // const day = d.getDate();
    // const monthName = getMonthName(d.getMonth());
    // const year = d.getFullYear();

    // const updated = `${monthName}, ${day}, ${year}`;

    console.log('github obj:',current)

    return (
      <div>
        Here are my mapped out repos...
      </div>
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
    )
  }
};
