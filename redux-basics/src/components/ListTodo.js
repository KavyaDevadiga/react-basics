import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const ListTodo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center">
      <input
        readOnly={true}
        value={todo.text}
        disabled={true}
        className="px-3 py-2 border border-gray-300"
        type="text"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeTodo(todo.id));
        }}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Remove
      </button>
    </div>
  );
};

export default ListTodo;
