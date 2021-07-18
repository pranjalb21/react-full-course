import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const operation = (val) => {
    let newValue = val === 0 ? 0 : value + val;
    setValue(newValue);
  };

  const complexIncrease = () => {
    setTimeout(() => {setValue((prevValue) => prevValue + 2)}, 2000);
  }
  
  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => operation(1)}>
          Increment
        </button>
        <button className="btn" onClick={() => operation(-1)}>
          Decrement
        </button>
        <button className="btn" onClick={() => operation(0)}>
          Reset
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increse later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
