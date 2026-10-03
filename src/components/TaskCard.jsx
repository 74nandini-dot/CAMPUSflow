
function TaskCard({ title, subject, dueDate }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{subject}</p>
      <span>Due: {dueDate}</span>
    </div>
  );
}

export default TaskCard;