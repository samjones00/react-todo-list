import React, { useState } from 'react';

const Task = ({ task }) => {

    const [isChecked, setIsChecked] = useState(task.isComplete);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (<li>
        <input type="checkbox" checked={isChecked} className="task-checkbox" onChange={handleCheckboxChange} />
        {task.title}
    </li>);
}

export default Task;