import Heading from "./components/Heading";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <section className="w-1/3 h-2/3 border-2 rounded-2xl">
        <Heading title={"Todo App"} />
      </section>
    </div>
  );
}

export default App;
