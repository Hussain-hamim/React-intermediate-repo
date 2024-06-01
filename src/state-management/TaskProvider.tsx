import { ReactNode, useReducer } from "react";
import TaskContext from "./contexts/tasksContext";
import taskReducer from "./reducers/taskReducer";

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
