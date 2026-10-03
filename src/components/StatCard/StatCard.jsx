function StatCard({ number, title }) {
  return (
    <div className="stat-card">
      <h2>{number}</h2>
      <p>{title}</p>
    </div>
  );
}

export default StatCard;