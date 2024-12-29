import "./App.css";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <h1>This is course {counter}</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={() => setCounter(0)}>Remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
