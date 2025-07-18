import { useState, useEffect } from "react";
import taskService from "../services/taskService";

const useTasks = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const sortTasks = (sortBy) => {
    let sortedTasks = [...taskList];

    switch (sortBy) {
      case "title":
        sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "date":
        sortedTasks.sort((a, b) => new Date(a.$createdAt) - new Date(b.$createdAt));
        break;
      case "completed":
        sortedTasks.sort((a, b) => a.isComplete - b.isComplete);
        break;
      default:
        break;
    }

    var sortOrder = sortBy.split(" ");
    if (sortOrder.length > 1 && sortOrder[1] === "desc") {
      sortedTasks.reverse();
    }

    setTaskList(sortedTasks);
  }

  const getTasks = async () => {
    const tasks = await taskService.getTasks();
    setTaskList(tasks);
  };

  const createTask = async (task) => {
    const newTask = await taskService.createTask(task);
    setTaskList([
      ...taskList,
      { $id: newTask.$id, title: task, isComplete: false },
    ]);
  };

  const toggleTaskComplete = async (id, checked) => {
    setTaskList(
      taskList.map((t) => (t.$id === id ? { ...t, isComplete: checked } : t))
    );
    await taskService.updateTask(id, { isComplete: checked });
  };

  const updateTask = async (id, changes) => {
    await taskService.updateTask(id, changes);
    setTaskList(taskList.map((t) => (t.$id === id ? { ...t, ...changes } : t)));
  };

  const deleteTask = async (id) => {
    setTaskList(taskList.filter((t) => t.$id !== id));
    await taskService.deleteTask(id);
  };

  return {
    taskList,
    createTask,
    toggleTaskComplete,
    updateTask,
    deleteTask,
    sortTasks
  };
};

export default useTasks;