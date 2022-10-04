import React, { useContext } from "react";
import todoListContext from "../context/todoListContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(todoListContext);
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          onClick={() => removeTask(task.id)}
          className="btn-delete task-btn"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <button
          onClick={() => findItem(task.id)}
          className="btn-delete task-btn"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
