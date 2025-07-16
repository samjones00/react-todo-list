import { useState } from 'react'
import './App.css'
import Tasks from './components/Task/tasks'
import Add from './components/Task/add'

function App() {

  const tasks = [{
    title: "task 1",
    isComplete: true
  },
  {
    title: "task 2",
    isComplete: false
  }]

  const [taskList, setTaskList] = useState(tasks);

  const saveTask = (task) => {
    // Logic to add a new task
    console.log("Adding task:", task);
    setTaskList([...taskList, { title: task, isComplete: false }]);
  }

  return (
    <>
      <div>
        <h1>Tasks</h1>
        <Tasks tasks={taskList}></Tasks>
        <Add saveTask={saveTask}></Add>
      </div>
    </>
  )
}

export default App
