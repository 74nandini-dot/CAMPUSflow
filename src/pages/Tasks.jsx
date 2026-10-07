import { useState, useContext } from 'react'
import TaskCard from '../components/TaskCard'
import './Tasks.css'

import { SubjectContext } from '../context/SubjectContext'
import { TaskContext } from '../context/TaskContext'

function Tasks() {
  const { subjectList } = useContext(SubjectContext)
  const { taskList, setTaskList } = useContext(TaskContext)

  const [showForm, setShowForm] = useState(false)

  const [newTask, setNewTask] = useState({
    title: '',
    subject: '',
    dueDate: '',
  })

  const toggleTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setNewTask({
      ...newTask,
      [name]: value,
    })
  }

  const addTask = (e) => {
    e.preventDefault()

    if (
      !newTask.title.trim() ||
      !newTask.subject.trim() ||
      !newTask.dueDate.trim()
    ) {
      return
    }

    const task = {
      id: Date.now(),
      title: newTask.title,
      subject: newTask.subject,
      dueDate: newTask.dueDate,
      completed: false,
    }

    setTaskList([...taskList, task])

    setNewTask({
      title: '',
      subject: '',
      dueDate: '',
    })

    setShowForm(false)
  }

  const completedTasks = taskList.filter(
    (task) => task.completed
  ).length

  const pendingTasks = taskList.filter(
    (task) => !task.completed
  ).length

  return (
    <div className="tasks-page">

      {/* Header */}
      <div className="tasks-header">

        <div>
          <span className="tasks-label">
            TASK MANAGEMENT
          </span>

          <h1>My Tasks</h1>

          <p>
            Keep track of your assignments, projects
            and academic work.
          </p>
        </div>

        <button
          className="add-task-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? '× Close' : '+ Add Task'}
        </button>

      </div>


      {/* Add Task Form */}
      {showForm && (
        <form
          className="add-task-form"
          onSubmit={addTask}
        >

          <div className="form-group">

            <label>Task Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={newTask.title}
              onChange={handleInputChange}
            />

          </div>


          <div className="form-group">

            <label>Subject</label>

            <select
              name="subject"
              value={newTask.subject}
              onChange={handleInputChange}
            >

              <option value="">
                Select subject
              </option>

              {subjectList.map((subject) => (
                <option
                  key={subject.id}
                  value={subject.name}
                >
                  {subject.name}
                </option>
              ))}

            </select>

          </div>


          <div className="form-group">

            <label>Due Date</label>

            <input
              type="text"
              name="dueDate"
              placeholder="e.g. Tomorrow"
              value={newTask.dueDate}
              onChange={handleInputChange}
            />

          </div>


          <button
            type="submit"
            className="save-task-button"
          >
            Add Task
          </button>

        </form>
      )}


      {/* Summary */}
      <div className="tasks-summary">

        <div className="task-summary-card">
          <span>Total Tasks</span>
          <strong>{taskList.length}</strong>
        </div>

        <div className="task-summary-card">
          <span>Completed</span>
          <strong>{completedTasks}</strong>
        </div>

        <div className="task-summary-card">
          <span>Pending</span>
          <strong>{pendingTasks}</strong>
        </div>

      </div>


      {/* All Tasks */}
      <section className="all-tasks">

        <div className="section-heading">

          <div>
            <h2>All Tasks</h2>

            <p>
              Manage your academic tasks
            </p>
          </div>

        </div>


        <div className="tasks-grid">

          {taskList.length > 0 ? (

            taskList.map((task) => (

              <TaskCard
                key={task.id}
                title={task.title}
                subject={task.subject}
                dueDate={task.dueDate}
                completed={task.completed}
                taskId={task.id}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />

            ))

          ) : (

            <div className="empty-tasks">

              <div>✓</div>

              <h3>No tasks left</h3>

              <p>
                You are all caught up!
              </p>

            </div>

          )}

        </div>

      </section>

    </div>
  )
}

export default Tasks