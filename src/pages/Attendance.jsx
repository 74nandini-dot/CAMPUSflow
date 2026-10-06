import { useState, useContext } from "react";
import "./Attendance.css";
import { SubjectContext } from "../context/SubjectContext";

function Attendance() {
    const { subjectList } = useContext(SubjectContext);

  const [attendance, setAttendance] = useState({});

  return (
    <div className="attendance-page">
      <h1>Attendance</h1>

    <p className="attendance-description">
      Track your attendance subject-wise and stay on top of your classes.
    </p>

    <div className="attendance-grid">
      {subjectList.map((subject) => {
        const subjectAttendance = attendance[subject.id] || {
          total: "",
          attended: "",
        };

        const isInvalid =
          subjectAttendance.attended !== "" &&
          subjectAttendance.total !== "" &&
          Number(subjectAttendance.attended) >
            Number(subjectAttendance.total);

        const percentage =
          subjectAttendance.total > 0 && !isInvalid
            ? (Number(subjectAttendance.attended) /
                Number(subjectAttendance.total)) *
              100
            : 0;

        return (
          <div className="attendance-card" key={subject.id}>
            <h2>{subject.name}</h2>
            <p>{subject.code}</p>

            <input
              type="number"
              placeholder="Total classes"
              value={subjectAttendance.total}
              onChange={(e) =>
                setAttendance({
                  ...attendance,
                  [subject.id]: {
                    ...subjectAttendance,
                    total: e.target.value,
                  },
                })
              }
            />

            <input
              type="number"
              placeholder="Classes attended"
              value={subjectAttendance.attended}
              onChange={(e) =>
                setAttendance({
                  ...attendance,
                  [subject.id]: {
                    ...subjectAttendance,
                    attended: e.target.value,
                  },
                })
              }
            />

            {isInvalid && (
              <p>
                Attended classes cannot be greater than total classes.
              </p>
            )}

            {!isInvalid && (
            <div className="attendance-percentage">
                <span>Attendance</span>
                <strong>{percentage.toFixed(2)}%</strong>
            </div>
            )}
          </div>
        );
      })}
     </div>
    </div>
  );
}

export default Attendance;