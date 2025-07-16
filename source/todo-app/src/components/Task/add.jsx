
import { useState } from 'react';

const Add = ({ saveTask }) => {
    const [input, setInput] = useState("");

    const handleClick = () => {
        if(!input.trim()) {
            return; // Prevent adding empty tasks
        }
        saveTask(input);
        setInput("");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new task"
                value={input}
                className="text-input"
                onChange={e => setInput(e.target.value)}
            />
            <button type="button" onClick={handleClick}>Add Task</button>
        </div>
    );
};

export default Add;