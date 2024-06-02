import "./App.css";
import AuthProvider from "./state-management/auth/AuthProvider";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";
import TaskList from "./state-management/tasks/TaskList";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <hr />
          <TaskList />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
