import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <React.Fragment>
      <h2>{text || "hi1"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toogle error
      </button>
      <h2>{isError && "Error..."}</h2>
      {isError ? <h2>Error occured</h2> : <h2>No error</h2>}
    </React.Fragment>
  );
};

export default ShortCircuit;
