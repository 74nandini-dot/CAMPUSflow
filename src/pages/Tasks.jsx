import { useState, useContext } from "react";
import "./Tasks.css";
import TaskCard from "../components/TaskCard";
import { SubjectContext } from "../context/SubjectContext";
import { TaskContext } from "../context/TaskContext";

const tasks = [
  {
    id: 1,
    title: "DSA Assignment",
    subject: "Data Structures",
    dueDate: "Tomorrow",
    completed: false,
  },
  {
    id: 2,
    title: "Cloud Computing Notes",
    subject: "Cloud Computing",
    dueDate: "Oct 5",
    completed: true,
  },
  {
    id: 3,
    title: "React Project",
    subject: "Web Development",
    dueDate: "Oct 7",
    completed: false,
  },
];

function Tasks() {
  const { subjectList } = useContext(SubjectContext);

  const { taskList, setTaskList } = useContext(TaskContext);

  const [showForm, setShowForm] = useState(false);

  const [newTask, setNewTask] = useState({
  title: "",
  subject: "",
  dueDate: "",
});

  const [editingTaskId, setEditingTaskId] = useState(null);

  const [filter, setFilter] = useState("all");

  const toggleTask = (id) => {
  setTaskList(
    taskList.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};
const addTask = () => {
  if (
    !newTask.title.trim() ||
    !newTask.subject.trim() ||
    !newTask.dueDate.trim()
  ) {
    alert("Please fill in all fields.");
    return;
  }

  if (editingTaskId !== null) {
    setTaskList(
      taskList.map((task) =>
        task.id === editingTaskId
          ? {
              ...task,
              title: newTask.title,
              subject: newTask.subject,
              dueDate: newTask.dueDate,
            }
          : task
      )
    );

    setEditingTaskId(null);
  } else {
  const task = {
    id: Date.now(),
    title: newTask.title,
    subject: newTask.subject,
    dueDate: newTask.dueDate,
    completed: false,
  };

  setTaskList([...taskList, task]);
  }
  setNewTask({
    title: "",
    subject: "",
    dueDate: "",
  });

  setShowForm(false);
};

const deleteTask = (id) => {
  setTaskList(
    taskList.filter((task) => task.id !== id)
  );
};

const editTask = (id) => {
  const task = taskList.find((task) => task.id === id);

  setNewTask({
    title: task.title,
    subject: task.subject,
    dueDate: task.dueDate,
  });

  setEditingTaskId(id);
  setShowForm(true);
};

const filteredTasks = taskList.filter((task) => {
  if (filter === "pending") {
    return !task.completed;
  }

  if (filter === "completed") {
    return task.completed;
  }

  return true;
});

  return (

   
    <div className="tasks-page">
      <h1>Tasks</h1>
      <p>Manage your academic tasks and assignments.</p>

          <button
          onClick={() => {
            if (showForm) {
              setNewTask({
                title: "",
                subject: "",
                dueDate: "",
              });
              setEditingTaskId(null);
              setShowForm(false);
            } else {
              setShowForm(true);
            }
          }}
        >
          {showForm ? "Cancel" : "Add Task"}
        </button>

           {showForm &&(
          <div className="task-form">
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  title: e.target.value,
                })
              }
            />

           <select
              value={newTask.subject}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  subject: e.target.value,
                })
              }
            >
              <option value="">Select subject</option>

              {subjectList.map((subject) => (
                <option key={subject.id} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </select>

            <input
              type="date"
              value={newTask.dueDate}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  dueDate: e.target.value,
                })
              }
            />
          <button onClick={addTask}>
            {editingTaskId !== null ? "Update Task" : "Add Task"}
          </button>
                    </div> 
            )}
    
        <div className="task-filters">
              <button onClick={() => setFilter("all")}>
                All
              </button>

              <button onClick={() => setFilter("pending")}>
                Pending
              </button>

              <button onClick={() => setFilter("completed")}>
                Completed
              </button>
            </div>

        <div className="task-list">
        <h2>All Tasks</h2>

      {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            subject={task.subject}
            dueDate={task.dueDate}
            completed={task.completed}
            onToggle={toggleTask}
            taskId={task.id}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}

      </div>
    </div>
  );
}

export default Tasks;