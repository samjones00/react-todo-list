import Task from "./task";

const Tasks = ({ tasks, toggleTaskComplete }) => (
  <ul>
    {tasks.map((t, idx) => (
      <Task task={t} key={t.id} toggleTaskComplete={toggleTaskComplete} />
    ))}
  </ul>
);

export default Tasks;
