import "./App.css";
import Counter from "./state-management/counter/Counter";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";
import TaskList from "./state-management/tasks/TaskList";

function App() {
  return (
    <>
      <TaskProvider>
        <Counter />
        <NavBar />
        <hr />
        <TaskList />
      </TaskProvider>
    </>
  );
}

export default App;
