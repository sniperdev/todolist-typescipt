import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <section className="h-5/6 overflow-y-auto">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          id={todo.id}
        />
      ))}
    </section>
  );
};

export default TodoList;
