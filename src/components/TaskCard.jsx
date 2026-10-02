function TaskCard(props) {
  return (
    <div>
      <h2>📝 Tasks</h2>
      <p>Pending Tasks: {props.pending}</p>
    </div>
  )
}

export default TaskCard