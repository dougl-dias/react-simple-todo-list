import { useEffect, useState } from 'react'

const useTask = () => {
  const [activeTaskId, setActiveTaskId] = useState(null)
  const [formEdit, setFormEdit] = useState(false)
  const [openPanel, setOpenPanel] = useState(false)

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('task-curso')

    if (!stored) return []

    const parsed = JSON.parse(stored)

    return parsed.map((task) => {
      return {
        ...task,
        createdAt: new Date(task.createdAt)
      }
    })
  })

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const task = tasks.find((t) => t.id === activeTaskId)

  const showPanel = openPanel && !formEdit

  useEffect(() => {
    localStorage.setItem('task-curso', JSON.stringify(tasks))
  }, [tasks])

  const handleSelectTask = (id) => {
    setActiveTaskId(id)
    setOpenPanel(true)
  }

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task

        return {
          ...task,
          completed: !task.completed
        }
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateFields()) return

    formEdit ? updateTask() : createTask()

    clearForm()
  }

  const handleEdit = (id) => {
    const task = tasks.find((t) => t.id === id)

    if (!task) return

    setActiveTaskId(id)
    setOpenPanel(false)
    setFormEdit(true)
    setTitle(task.title)
    setDescription(task.description)
  }

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))

    if (activeTaskId === id) {
      setActiveTaskId(null)
      setOpenPanel(false)
    }
  }

  const createTask = () => {
    const id = Math.max(0, ...tasks.map((t) => t.id)) + 1

    const newTask = {
      id,
      title,
      description,
      completed: false,
      createdAt: new Date()
    }

    setTasks((prev) => [...prev, newTask])
  }

  const updateTask = () => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== activeTaskId) return task

        return {
          ...task,
          title,
          description
        }
      })
    )
    setFormEdit(false)
    setOpenPanel(true)
  }

  const cancelEdit = () => {
    setFormEdit(false)
    clearForm()
  }

  const clearForm = () => {
    setTitle('')
    setDescription('')
  }

  const validateFields = () => {
    if (!title.trim() || !description.trim()) {
      alert('Preencha todos os campos')
      return false
    }

    return true
  }

  return {
    task,
    tasks,

    title,
    setTitle,

    description,
    setDescription,

    showPanel,
    setOpenPanel,

    formEdit,

    handleSubmit,
    handleEdit,
    handleDelete,
    handleSelectTask,
    handleToggleTask,

    cancelEdit,
    clearForm
  }
}

export { useTask }
