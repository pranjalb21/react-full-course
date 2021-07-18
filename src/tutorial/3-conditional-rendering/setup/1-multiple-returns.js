import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300)
          return response.json();
        else{
          setIsError(true);
          setIsLoading(false);
          throw new Error(response.statusText);
        } 
      })
      .then((user) =>{
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // if(isLoading){
  //   return <h1>Loading...</h1>;
  // }
  // else if(isError){
  //   return <h1>Error while fetching data</h1>;
  // }
  // return <h1>{user}</h1>;
  return isLoading ? (<h1>Loading...</h1>) : isError ? (<h1>Error while fetching data</h1>) : (<h1>{user}</h1>);
};

export default MultipleReturns;
