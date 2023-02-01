import React, { createContext, useState } from "react";
import { Todo } from "../module";
interface TodoContext {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<TodoContext>({
  todos: [],
  setTodos: () => {},
});

interface Children {
  children: JSX.Element[];
}
export const TodoProvider = ({ children }: Children) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Create React App", completed: false },
    { id: 2, title: "Change readme for project", completed: false },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
