function AttendanceCard({ subject, percentage, onClick }) {
  const getStatus = () => {
    if (percentage >= 85) {
      return "Excellent";
    }

    if (percentage >= 75) {
      return "Good";
    }

    return "Low";
  };

  return (
    <div className="attendance-card" onClick={onClick}>
      <div className="attendance-card-header">
        <div>
          <h3>{subject}</h3>
          <p>Attendance</p>
        </div>

        <span className="attendance-status">
          {getStatus()}
        </span>
      </div>

      <div className="attendance-circle-wrapper">
        <div
          className="attendance-circle"
          style={{
            "--attendance": `${percentage * 3.6}deg`,
          }}
        >
          <div className="attendance-circle-inner">
            <strong>{percentage}%</strong>
            <span>Present</span>
          </div>
        </div>
      </div>

      <div className="attendance-bottom">
        <span>Overall attendance</span>
        <strong>
          {percentage >= 75 ? "On track" : "Needs attention"}
        </strong>
      </div>
    </div>
  );
}

export default AttendanceCard;