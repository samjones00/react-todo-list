import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const Details = ({ tasks, updateTask, deleteTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.$id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

  const [title, setTitle] = useState(task.title);
  const [isComplete, setIsComplete] = useState(task.isComplete);

  const handleSave = () => {
    updateTask(task.$id, { title, isComplete });
    navigate("/", { replace: true });
  };

  const handleCancel = () => {
    navigate("/", { replace: true });
  };

  const handleDelete = () => {
    deleteTask(task.$id);
    navigate("/", { replace: true });
  };

  return (
    <div className="details-page">
      <h2 className="details-title">{title}</h2>
      <div className="details-content">
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <label htmlFor="task-title" style={{ minWidth: "90px" }}>
            Title
          </label>
          <input
            className="text-input"
            type="text"
            value={title}
            id="task-title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <label htmlFor="task-complete" style={{ minWidth: "90px" }}>
            Created
          </label>
          {new Date(task.$createdAt).toLocaleDateString("en-GB", {  hour: 'numeric',  minute: 'numeric',  hour12: true})}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <label htmlFor="task-complete" style={{ minWidth: "90px" }}>
            Is Complete
          </label>
          <input
            type="checkbox"
            checked={isComplete}
            id="task-complete"
            onChange={(e) => setIsComplete(e.target.checked)}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <label style={{ minWidth: "90px" }}>Delete?</label>
          <button
            type="button"
            className="button-delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div style={{ display: "flex", gap: "1em" }}>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
