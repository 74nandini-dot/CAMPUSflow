function SubjectCard({ name, teacher, attendance }) {
  return (
    <div className="subject-card">
      <div className="subject-top">
        <div className="subject-icon">
          {name.charAt(0)}
        </div>

        <div className="subject-info">
          <h3>{name}</h3>
          <p>{teacher}</p>
        </div>
      </div>

      <div className="subject-attendance">
        <div className="attendance-label">
          <span>Attendance</span>
          <strong>{attendance}%</strong>
        </div>

        <div className="attendance-bar">
          <div
            className="attendance-fill"
            style={{ width: `${attendance}%` }}
          ></div>
        </div>
      </div>

      <div className="subject-footer">
        <span>
          {attendance >= 75 ? "Good standing" : "Attendance low"}
        </span>

        <span>View details →</span>
      </div>
    </div>
  );
}

export default SubjectCard;