function StatCard({ number, title }) {
  const cardType = title.toLowerCase().replace(/\s+/g, '-');

  const icons = {
    'total-tasks': '✓',
    'completed': '✓',
    'pending': '⌛',
    'due-soon': '◷',
  };

  return (
    <div className={`stat-card stat-${cardType}`}>
      <div className="stat-icon">
        {icons[cardType] || '•'}
      </div>

      <div className="stat-content">
        <h2>{number}</h2>
        <p>{title}</p>
      </div>

      <div className="stat-arrow">
        →
      </div>
    </div>
  );
}

export default StatCard;