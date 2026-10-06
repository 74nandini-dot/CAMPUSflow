import { createContext, useState } from "react";
import { subjects as initialSubjects } from "../data/subjects";

export const SubjectContext = createContext();

export function SubjectProvider({ children }) {
  const [subjectList, setSubjectList] = useState(initialSubjects);

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