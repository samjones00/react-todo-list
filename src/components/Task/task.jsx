import { Link } from "react-router-dom";

const Task = ({ task, toggleTaskComplete }) => {
  const handleCheckboxChange = (e) => {
    toggleTaskComplete(task.$id, e.target.checked);
  };
  return (
    <li className={task.isComplete ? "completed" : ""}>
      <input
        type="checkbox"
        checked={task.isComplete}
        className="task-checkbox"
        onChange={handleCheckboxChange}
      />
      <Link to={`/tasks/${task.$id}`}>{task.title}</Link>
    </li>
  );
};

export default Task;
