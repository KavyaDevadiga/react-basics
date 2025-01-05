import React, { useState } from "react";

import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const [todoMsg, setTodoMsg] = useState(todo.title);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, title: todoMsg });
    setIsTodoEditable(false);
  };

  const markCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <input
        type="checkbox"
        className="curser-pointer"
        checked={todo.completed}
        onChange={() => markCompleted()}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "bg-gray-100" : "bg-white"
        }`}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        onClick={() => {
          if (todo.completed) return;
          isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
