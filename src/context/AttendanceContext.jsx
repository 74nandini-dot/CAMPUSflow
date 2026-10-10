import { createContext, useState, useEffect} from "react";

export const AttendanceContext = createContext();

export function AttendanceProvider({ children }) {
  const [attendance, setAttendance] = useState(() => {
  try {
    const savedAttendance = localStorage.getItem("attendance");

    return savedAttendance
      ? JSON.parse(savedAttendance)
      : {};
  } catch (error) {
    console.error("Failed to load attendance:", error);
    return {};
  }
});

  useEffect(() => {
  localStorage.setItem("attendance", JSON.stringify(attendance));
}, [attendance]);

  return (
    <AttendanceContext.Provider
      value={{
        attendance,
        setAttendance,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
}