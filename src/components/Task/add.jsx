import { useState } from "react";

const Add = ({ createTask }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (!input.trim()) {
      return; // Prevent adding empty tasks
    }
    createTask(input);
    setInput("");
  };

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "0",
        margin: "0.5em 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Add a new task"
        value={input}
        className="text-input"
        style={{
          flex: 1,
          margin: 0,
          borderRadius: "8px 0 0 8px",
          borderRight: "none",
        }}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        onClick={handleClick}
        style={{
          borderRadius: "0 8px 8px 0",
          margin: 0,
          height: "100%",
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default Add;
