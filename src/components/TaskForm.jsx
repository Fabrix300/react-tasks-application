import React, { useState, useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({ title: title, description: description })
    setTitle('')
    setDescription('')
  }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h3 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h3>
        <input type="text" placeholder='Escribe el título de tu tarea...' 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='bg-slate-300 p-3 w-full mb-2'
        autoFocus/>
        <textarea type="text" placeholder='Escribe la descripción de tu tarea...' 
        onChange={(e) => setDescription(e.target.value)}
        className='bg-slate-300 p-3 w-full mb-2'
        value={description}/>
        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm