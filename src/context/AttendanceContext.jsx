import { createContext, useState } from "react";

export const AttendanceContext = createContext();

export function AttendanceProvider({ children }) {
  const [attendance, setAttendance] = useState({});

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