import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <nav>
  <Link to="/">Dashboard</Link>
  <Link to="/subjects">Subjects</Link>
  <Link to="/tasks">Tasks</Link>
  <Link to="/attendance">Attendance</Link>
</nav>
  )
}

export default Navbar