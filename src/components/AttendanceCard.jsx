function AttendanceCard(props) {
  return (
    <div>
      <h2>📊 Attendance</h2>
      <p>Current Attendance: {props.percentage}%</p>
    </div>
  )
}

export default AttendanceCard