function SubjectCard({ name, teacher, attendance }) {
  return (
    <div className="subject-card">
      <h3>{name}</h3>
      <p>{teacher}</p>
      <span>Attendance: {attendance}%</span>
    </div>
  );
}

export default SubjectCard;