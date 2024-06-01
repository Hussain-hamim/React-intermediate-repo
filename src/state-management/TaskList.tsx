import { useContext, useReducer, useState } from "react";
import taskReducer from "./reducers/taskReducer";
import TaskContext from "./contexts/tasksContext";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        placeholder="Add Task here..."
        className="form-control"
        type="text"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <button
        onClick={() => {
          if (!title) return;
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: title },
          });
          setTitle("");
        }}
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                dispatch({ type: "DELETE", taskId: task.id });
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
