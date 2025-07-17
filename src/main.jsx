import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Details from "./components/Task/details.jsx";
import Tasks from "./components/Task/tasks";
import Add from "./components/Task/add";

function Home({ taskList, saveTask, toggleTaskComplete }) {
  return (
    <div style={{ padding: "0 1.5em" }}>
      <Tasks tasks={taskList} toggleTaskComplete={toggleTaskComplete} />
      <p style={{ marginBottom: "1em", marginLeft: "0.5em" }}>
        Total tasks: {taskList.length}
      </p>
      <Add saveTask={saveTask} />
    </div>
  );
}

function NavBar() {
  return (
    <nav
      style={{
        width: "100%",
        background: "#1a1a1a",
        padding: "1em 2em",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        marginBottom: "2em",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.2em",
          marginRight: "2em",
        }}
      >
        Tasks
      </Link>
    </nav>
  );
}

const initialTasks = [
  { id: 1, title: "task 1", isComplete: true },
  { id: 2, title: "task 2", isComplete: false },
];

function MainApp() {
  const [taskList, setTaskList] = useState(initialTasks);

  const saveTask = (task) => {
    setTaskList([
      ...taskList,
      { id: taskList.length + 1, title: task, isComplete: false },
    ]);
  };

  const toggleTaskComplete = (id, checked) => {
    setTaskList(
      taskList.map((t) => (t.id === id ? { ...t, isComplete: checked } : t)),
    );
  };

  const updateTask = (id, changes) => {
    setTaskList(taskList.map((t) => (t.id === id ? { ...t, ...changes } : t)));
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  return (
    <StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                taskList={taskList}
                saveTask={saveTask}
                toggleTaskComplete={toggleTaskComplete}
              />
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <Details
                tasks={taskList}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<MainApp />);
