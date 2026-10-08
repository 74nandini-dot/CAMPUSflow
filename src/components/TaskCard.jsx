function TaskCard({
  title,
  subject,
  dueDate,
  completed = false,
  onToggle,
  taskId,
  onDelete,
  onEdit,
  onClick,
}) {
  return (
    <div className={`task-card ${completed ? "completed" : "pending"}`}
      onClick={onClick}>
      <div className="task-card-top">
        <div className="task-icon">
          {completed ? "✓" : "○"}
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

      <div className="task-card-actions">
        <button
          type="button"
          onClick={() => onToggle?.(taskId)}
        >
          {completed ? "Mark Pending" : "Mark Complete"}
        </button>

        <button
          type="button"
          onClick={() => onEdit?.(taskId)}
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => onDelete?.(taskId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
