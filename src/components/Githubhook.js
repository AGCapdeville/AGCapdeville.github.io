import React, { useState, useEffect  } from 'react';
import '../App.css';
import {user} from '../data/data'
import axios from 'axios';

// constructor(props) {
//   super(props)
//   this.state = { data: [] }
// }

const useGithubApi = (url) => {
  {console.log("url:"+url)} 

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
        console.log(" Response: \n",res);
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
      });
    };
    fetchData();
  },[]);
  return [{data, isLoading, isError }];
}


// function mapRepos(){


//   // console.log("The oldest repo: "+oldestDate);
//   // console.log("Repo: " + repos[indexOfOldest]["name"]);
//   // return("number of repos: " + numberOfRepos +", ");
//   return indexOfOldest;
// }



export default () => {
  const [{data, isLoading, isError}] = useGithubApi(`https://api.github.com/users/agcapdeville/repos`);



  console.log(isLoading);
  if(isLoading){
    return("loading...");
  }else{
    var numRepos= Object.keys(data).length;
    var curRepo = 0;
    var curDate = new Date(data[0]["updated_at"]);
    var indexDate = new Date(data[0]["updated_at"]);
    // console.log("----- before checks -----");
    // console.log("index date: "+indexDate);
    // console.log("current date: "+curDate);
    var i = 0;
    for (i=0; i<numRepos; i++){
      indexDate = new Date(data[i]["updated_at"]);
      if ( indexDate > curDate ){
        curDate = indexDate;
        curRepo= i;
      }
    }

    // var str = data[0]["name"];
    var str = data[curRepo]["name"];
    // return(str);
    var link =  "https://github.com/AGCapdeville/"+str;
    return(
      <div>
        [ Current Repo:
        <a href={link} > {str} </a> ]
      </div>
    )
  }

};





{/* <p>Full_Name: {item.full_name}</p>
<p>Age: {item.owner.login}</p> */}

// -- Notes:
// 
// // hooks.js
// import { useState } from 'react';
// export const useAction = (action) => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   // The incoming "action" argument to the hook is NOT performed.
//   // It is only stored in the function scope; so that, we can use it when
//   // performing the action using the following function
//   // This function is returned as the second element in the returned array
//   const performAction = async (body = null) => {
//     try {
//       setLoading(true);
//       setData(null);
//       setError(null);
//       const data = await action(body);
//       setData(data);
//     } catch (e) {
//       setError(e);
//     } finally {
//       setLoading(false);
//     }
//   }
//   return [{ loading, data, error }, performAction];
// }



// const [githubData, setData] = useState([]);
// const asyncComponent = () => 
// useEffect( () => {
//     let ignore = false;
//     const fetchData = async () => {
//     const result = await axios(`https://api.github.com/users/${user}`);
//     if(!ignore) {
//         setData(result);
//     }
//     }
//     fetchData();
//     return () => { ignore = true; }
// }, [githubData]);




///
      // axios.get(url)
      // .then(response => {
      //   const repos = response;

      //   setData(repos);
      //   setIsLoading(false);
      // }, error => {
      //   console.log(error);
      //   setIsError(true);
      // });