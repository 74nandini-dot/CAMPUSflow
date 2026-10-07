import { createContext, useState } from "react";

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
  const [taskList, setTaskList] = useState(initialTasks);

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