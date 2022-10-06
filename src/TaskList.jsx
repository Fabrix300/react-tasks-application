import { useEffect, useState } from 'react'

function TaskList({taskList}) {
  if(taskList.length === 0){
    return <h3>No hay tareas aún...</h3>
  }

  return (
    <div>
      {
        taskList.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList