import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('Use Effect');
    document.title = value > 0 ? (`New message(${value})`) : ` No message`;
  }, [value]);

  useEffect(() => {
    console.log('Hello world');
  }, []);
  
  console.log('Render componet');

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>Click here</button>
    </>
  );
};

export default UseEffectBasics;
