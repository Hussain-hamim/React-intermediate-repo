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
import TaskContext from "./state-management/contexts/tasksContext";

// import { Dispatch } from "react";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <>
      <TaskContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <TaskList />
      </TaskContext.Provider>
    </>
  );
}

export default App;
