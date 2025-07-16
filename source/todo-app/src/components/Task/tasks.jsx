import Task from './task'

const Tasks = ({ tasks }) => (
    <ul>
        {tasks.map((t, idx) => (
            <Task task={t} key={idx} />
        ))}
    </ul>
);

export default Tasks;