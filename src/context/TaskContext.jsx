import { createContext, useState, useEffect } from "react";

const initialTasks = [
  {
    id: 1,
    title: "DSA Assignment",
    subject: "Data Structures",
    dueDate: "2026-10-09",
    completed: false,
  },
  {
    id: 2,
    title: "Cloud Computing Notes",
    subject: "Cloud Computing",
    dueDate: "2026-10-05",
    completed: true,
  },
  {
    id: 3,
    title: "React Project",
    subject: "Web Development",
    dueDate: "2026-10-07",
    completed: false,
  },
];

export const TaskContext = createContext();

export function TaskProvider({ children }) {
 const [taskList, setTaskList] = useState(() => {
  try {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  } catch (error) {
    console.error("Failed to load tasks:", error);
    return initialTasks;
  }
});

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}, [taskList]);

  return (
    <TaskContext.Provider
      value={{
        taskList,
        setTaskList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}