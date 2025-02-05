import "./App.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  useEffect(() => {
    document.title = "Your Custom Title";
  }, []);
  const todos = useSelector((state) => {
    return state.todos;
  });
  return (
    <div className="App">
      <AddTodo />
      {todos.map((todo) => (
        <ListTodo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default App;
