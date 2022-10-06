import React, { useState } from 'react'

function TaskForm({createTask, taskList}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(title, description)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Escribe el título de tu tarea...' 
      onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder='Escribe la descripción de tu tarea...' 
      onChange={(e) => setDescription(e.target.value)}/>
      <button>Guardar</button>
    </form>
  )
}

export default TaskForm