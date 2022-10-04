import React, { useContext } from "react";
import todoListContext from "../context/todoListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(todoListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task, index) => {
            return <Task key={index} task={task} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
