function TaskCard({
  title,
  subject,
  dueDate,
  completed = false,
  onToggle,
  taskId,
  onDelete,
  onEdit,
}) {
  return (
    <div className={`task-card ${completed ? "completed" : "pending"}`}>

      <div className="task-card-top">
        <div className="task-icon">
          ✓
        </div>

        <span className={`task-status ${completed ? "done" : "waiting"}`}>
          {completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="task-card-content">
        <h3>{title}</h3>
        <p>{subject}</p>
      </div>

      <div className="task-card-bottom">
        <div className="task-due">
          <span>Due</span>
          <strong>{dueDate}</strong>
        </div>

        <span className="task-arrow">→</span>
      </div>

    </div>
  );
}

export default TaskCard;