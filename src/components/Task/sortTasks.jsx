const sortTasks = (tasks, sortBy) => {

    const sort = (tasks) => {
        if (!tasks || tasks.length === 0) {

            if (sortBy === "title") {
                return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortBy === "date") {
                return [...tasks].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            } else if (sortBy === "completed") {
                return [...tasks].sort((a, b) => a.isComplete - b.isComplete);
            }
        }
    }

    return (
        <ul className="sort-tasks-list">
            <li>Title</li>
            <li>Date</li>
            <li>Completed</li>
        </ul>
    );
}

export default sortTasks