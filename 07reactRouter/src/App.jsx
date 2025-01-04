import "./App.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Start</h1>
    </>
  );
}

export default App;
