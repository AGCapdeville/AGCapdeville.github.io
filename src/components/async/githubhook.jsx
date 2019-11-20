import React, { useState, useEffect  } from 'react';
import {user} from '../../data/data'

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(async () => {
    const result = await axios(url);
    const data = await result.json();
    const [item] = data.result;
    setData[item];
    setLoading(false);
  },[]);
  return (data, loading);
}

export default () => {
  const {data,loading} = useFetch(`https://api.github.com/users/${user}`);

  return(
    <div>
      {loading ? <div>...loading</div> : <div>{data}</div>}
    </div>
  );
};



// 
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
