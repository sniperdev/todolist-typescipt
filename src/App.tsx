import Heading from "./components/Heading";
import InputTodo from "./components/InputTodo";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <section className="w-1/3 h-2/3 border-2 rounded-2xl">
        <TodoProvider>
          <Heading title={"Todo App"} />
          <InputTodo />
          <TodoList />
        </TodoProvider>
      </section>
    </div>
  );
}

export default App;
