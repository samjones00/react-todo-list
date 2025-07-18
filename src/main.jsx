import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Details from "./components/Task/details";
import Tasks from "./components/Task/tasks";
import Add from "./components/Task/add";
import SortTasks from "./components/Task/sortTasks";
import useTasks from "./assets/hooks/useTasks";

function Home({ taskList, createTask, toggleTaskComplete }) {
  return (
    <div style={{ padding: "0 1.5em" }}>
      <SortTasks />
      <Tasks tasks={taskList} toggleTaskComplete={toggleTaskComplete} />
      <p style={{ marginBottom: "1em", marginLeft: "0.5em" }}>
        Total tasks: {taskList.length}
      </p>
      <Add createTask={createTask} />
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

function MainApp() {
  const {
    taskList,
    createTask,
    toggleTaskComplete,
    updateTask,
    deleteTask,
  } = useTasks();

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
                createTask={createTask}
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
