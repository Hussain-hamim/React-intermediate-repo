import "./App.css";
import PostList from "./react-query/PostList";
import AuthProvider from "./state-management/AuthProvider";
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
