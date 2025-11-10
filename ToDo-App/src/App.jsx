
import { useState, useEffect, useRef } from 'react'
import './styles.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  const isInitialMount = useRef(true)

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem('tasks')
      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks)
        setTasks(parsedTasks)
        console.log('Loaded tasks from localStorage:', parsedTasks)
      } else {
        console.log('No tasks found in localStorage')
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error)
    }
  }, [])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks))
      console.log('Saved tasks to localStorage:', tasks)
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error)
    }
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (id) => {
    const task = tasks.find(t => t.id === id)
    setEditingId(id)
    setEditText(task.title)
  }

  const saveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editingId ? { ...task, title: editText } : task
    ))
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form className='new-item-form' onSubmit={addTask}>
        <div className='form-row'>
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id='item'
            placeholder='Input an item.'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>Add</button>
      </form>

      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className="todo-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="checkbox"
            />
            {editingId === task.id ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={saveEdit} className="save-btn">Save</button>
              </div>
            ) : (
              <span className={task.completed ? 'completed' : ''}>{task.title}</span>
            )}
            <div className="actions">
              {editingId !== task.id && (
                <button onClick={() => editTask(task.id)} className="edit-btn">Edit</button>
              )}
              <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
