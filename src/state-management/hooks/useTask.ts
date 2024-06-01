import { useContext } from "react";
import TaskContext from "../contexts/tasksContext";

const useTask = () => useContext(TaskContext);

export default useTask;
