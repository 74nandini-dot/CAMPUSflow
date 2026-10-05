function TaskCard({
  title,
  subject,
  dueDate,
  completed,
  onToggle,
  taskId,
  onDelete,
  onEdit,
}) {
  return (

    <div className={`task-card ${completed ? "completed" : "pending"}`}>
      <h3>{title}</h3>
      <p>{subject}</p>
      <span>Due: {dueDate}</span>
      <span>{completed ? "Completed" : "Pending"}</span>

      <button onClick={() => onToggle(taskId)}>
        {completed ? "Mark Pending" : "Mark Complete"}
      </button>

      <button onClick={() => onDelete(taskId)}>
          Delete
      </button>

      <button onClick={() => onEdit(taskId)}>
          Edit
      </button>
    </div>
  );
}

export default TaskCard;