import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../module";
import { BsFillTrashFill } from "react-icons/all";
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
  const handleDeleteTodo = () => {
    setTodos(todos.filter((element) => element.id !== id));
  };
  return (
    <div className="flex items-center h-10 border border-white">
      <input type="checkbox" checked={completed} onChange={setChecked} />
      <h1 className="px-2">{title}</h1>
      <span onClick={handleDeleteTodo}>
        <BsFillTrashFill />
      </span>
    </div>
  );
};

export default SingleTodo;
