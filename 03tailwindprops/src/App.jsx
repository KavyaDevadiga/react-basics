import "./App.css";

import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite with tailwind</h1>
      <Card userName="kavya" />
      <Card userName="Anjali" />
      <Card userName="Punith" />
      <Card />
    </>
  );
}

export default App;
