import React from "react";

const InputTodo = () => {
  return (
    <form>
      <input
        placeholder="Write your task"
        className="w-4/5 p-2 bg-black border-b-2 hover:border-b-gray-500 focus:outline-none focus:border-b-gray-500"
      />
      <button
        type="submit"
        className="py-2 w-1/5 border-b-2 border-l-2 hover:text-gray-500 hover:border-b-gray-500"
      >
        Add
      </button>
    </form>
  );
};

export default InputTodo;
