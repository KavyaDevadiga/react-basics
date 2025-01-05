import React from "react";
import useCounterContext from "../context/counterContext";

const CounterDisplay = () => {
  const { counterValue } = useCounterContext();
  return <div>counterValue: {counterValue}</div>;
};

export default CounterDisplay;
