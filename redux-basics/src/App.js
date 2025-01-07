import "./App.css";

import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const todos = useSelector((state) => {
    console.log(state);
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
