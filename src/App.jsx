import { useEffect, useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import { tasks } from './tasks.js'

function App() {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    setTaskList(tasks)
  }, [])

  const createTask = (title, description) => {
    setTaskList([...taskList, {
      title: title,
      id: taskList.length,
      description: description
    }])
  }

  return (
    <>
      <TaskForm createTask={createTask} taskList={taskList}/>
      <TaskList taskList={taskList}/>
    </>
  )
}

export default App
