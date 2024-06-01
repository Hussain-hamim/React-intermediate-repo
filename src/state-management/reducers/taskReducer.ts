export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task; // payload
}
interface DeleteTask {
  type: "DELETE";
  taskId: number; // payload
}

type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default taskReducer;
