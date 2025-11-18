import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import "./App.css";
function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "04/10/2025" },
    { name: "Go to college", dueDate: "04/10/2025" },
    {
      name: "Try hard until win",
      dueDate: "Right now, no excuses will be entertained.",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
