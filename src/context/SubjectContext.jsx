
import { createContext, useState, useEffect } from "react";
import { subjects as initialSubjects } from "../data/subjects";

export const SubjectContext = createContext();

export function SubjectProvider({ children }) {
  const [subjectList, setSubjectList] = useState(() => {
    try {
      const savedSubjects = localStorage.getItem("subjects");

      return savedSubjects
        ? JSON.parse(savedSubjects)
        : initialSubjects;
    } catch (error) {
      console.error("Failed to load subjects:", error);
      return initialSubjects;
    }
  });

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjectList));
  }, [subjectList]);

  return (
    <SubjectContext.Provider
      value={{
        subjectList,
        setSubjectList,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
}

