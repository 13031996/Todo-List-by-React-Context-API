import { useState, useEffect } from "react";
import todoListContext from "./todoListContext";
import { v4 } from "uuid";

const initialState = () => {
  let list = localStorage.getItem("tasks");
  // console.log(list);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const TodoList = (props) => {
  const [tasks, setTasks] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: { v4 } }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const clearList = () => {
    setTasks([]);
  };
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <todoListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </todoListContext.Provider>
  );
};

export default TodoList;
