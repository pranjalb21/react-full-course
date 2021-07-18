import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Pranjal');

  const handleClick = () => {
    // if(text == 'Pranjal')
    //   setText("Hello world");
    // else
    //   setText("Pranjal");
    text === "Pranjal" ? setText("Hello world") : setText("Pranjal");
  }
  
  return (
  <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      Change Title
    </button>
  </React.Fragment>
  );
};

export default UseStateBasics;
