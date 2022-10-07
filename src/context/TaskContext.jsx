import {createContext, useEffect, useState} from 'react'
import { tasks } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
	const [taskList, setTaskList] = useState([])
	const [indexForTaskList, setIndexForTaskList] = useState(0)

	useEffect(() => {
    setTaskList(tasks)
		setIndexForTaskList(tasks.length)
  }, [])

	const createTask = (task) => {
    setTaskList([...taskList, {
      title: task.title,
      id: indexForTaskList,
      description: task.description
    }])
		setIndexForTaskList(indexForTaskList + 1)
  }

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId))
  }

  return (
		<TaskContext.Provider value={{
			taskList: taskList,
			deleteTask: deleteTask,
			createTask: createTask
		}}>
			{props.children}
		</TaskContext.Provider>
  )
}