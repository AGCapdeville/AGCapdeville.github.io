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


function mapRepos(repos){
  if (repos == null){
    return ("still loading")
  }else{
    var numberOfRepos= Object.keys(repos).length;
    var oldestDate = repos[0]["updated_at"];
    var indexOfOldest;
    
    var i;
    for(i=0 ; i < numberOfRepos; i++){
      if(oldestDate < repos[i]["updated_at"]){
        oldestDate = repos[i]["updated_at"];
        indexOfOldest = i;
      }
    }
    return( indexOfOldest )
  }
}



export default () => {
  const [{data, isLoading, isError}] = useGithubApi(`https://api.github.com/users/agcapdeville/repos`);

  var name = "Loading...";
  var list = [];

  isLoading ? name="loading..." : name = ( "name: "+data[mapRepos(data)]["name"] );

  // isLoading ? list[]


  return( name );
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