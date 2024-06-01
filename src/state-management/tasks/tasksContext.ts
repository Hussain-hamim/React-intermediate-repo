import React from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TaskContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);
// const TaskContext =  React.createContext<TaskContextType | null>(null); // same as above line

export default TaskContext;
