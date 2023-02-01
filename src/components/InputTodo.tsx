import React, { useContext, useRef, useState } from "react";
import { TodoContext } from "../context/TodoContext";
const InputTodo = () => {
  const [todo, setTodo] = useState("");
  const contextValue = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      contextValue?.setTodos([
        ...contextValue.todos,
        { id: contextValue.todos?.length, title: todo, completed: false },
      ]);
      setTodo("");
      inputRef.current?.blur();
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        placeholder="Write your task"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
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
