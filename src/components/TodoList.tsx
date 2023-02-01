import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const context = useContext(TodoContext);
  return (
    <section>
      {context?.todos.map((todo) => (
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
