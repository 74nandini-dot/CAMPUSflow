function AttendanceCard({ subject, percentage }) {
  return (
    <div className="attendance-card">
      <h3>{subject}</h3>
      <p>Attendance</p>
      <strong>{percentage}%</strong>
    </div>
  );
}

export default AttendanceCard;