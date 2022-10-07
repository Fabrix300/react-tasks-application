import { useContext } from 'react'
import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const {taskList} = useContext(TaskContext)

  if(taskList.length === 0){
    return <h3 className='text-white text-4xl font-bold text-center'>No hay tareas...</h3>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {
        taskList.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      }
    </div>
  )
}

export default TaskList