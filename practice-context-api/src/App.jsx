import "./App.css";

import { useState } from "react";
import CounterControls from "./components/CounterControls";
import CounterDisplay from "./components/CounterDisplay";
import { CounterContextProvider } from "./context/counterContext";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  const increamentCounter = () => {
    setCounterValue(counterValue + 1);
  };

  const decreamentCounter = () => {
    setCounterValue(counterValue - 1);
  };

  const resetCounter = () => {
    setCounterValue(0);
  };

  return (
    <CounterContextProvider
      value={{
        counterValue,
        increamentCounter,
        decreamentCounter,
        resetCounter,
      }}
    >
      <h1 style={{ color: "red", padding: "10px" }}>Counter app</h1>
      <CounterDisplay />
      <CounterControls />
    </CounterContextProvider>
  );
}

export default App;
