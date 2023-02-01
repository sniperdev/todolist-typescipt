import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../module";
interface Props {
  id: number;
  title: string;
  completed: boolean;
}

const SingleTodo = ({ id, title, completed }: Props) => {
  const { todos, setTodos } = useContext(TodoContext);
  const setChecked = () => {
    setTodos(
      todos.map((element): Todo => {
        return element.id === id
          ? { ...element, completed: !element.completed }
          : element;
      })
    );
  };
  return (
    <div className="flex">
      <input type="checkbox" checked={completed} onChange={setChecked} />
      <h1>{title}</h1>
    </div>
  );
};

export default SingleTodo;
