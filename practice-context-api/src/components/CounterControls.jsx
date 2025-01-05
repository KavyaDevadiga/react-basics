import React from "react";
import useCounterContext from "../context/counterContext";

const CounterControls = () => {
  const { increamentCounter, decreamentCounter, resetCounter } =
    useCounterContext();
  return (
    <div style={{ margin: "10px" }}>
      <button onClick={increamentCounter}>Increment</button>
      <button onClick={decreamentCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default CounterControls;
