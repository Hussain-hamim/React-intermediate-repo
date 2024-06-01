import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import hussain from "./assets/hhamim.jpg";
import HomePage from "./routing/HomePage";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import { useReducer, useState } from "react";
import taskReducer from "./state-management/reducers/taskReducer";

function App() {
  const [count, setCounter] = useState(0);

  console.log(count);

  return (
    <>
      <NavBar count={count} />
      <TaskList count={(c: number) => setCounter(c)} />
    </>
  );
}

export default App;
