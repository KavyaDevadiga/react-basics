import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [current, addCurrent] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-700">Todo App</h1>
      <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-4">
        <input
          value={current}
          onChange={(e) => addCurrent(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Add todo"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (current.trim() !== "") {
              dispatch(addTodo(current));
              addCurrent("");
            }
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
