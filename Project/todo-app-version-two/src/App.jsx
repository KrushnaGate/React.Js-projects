import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./index.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "GO to college",
      dueDate: "4/10/2024",
    },
    {
      name: "Like this vedio",
      dueDate: "right now",
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
