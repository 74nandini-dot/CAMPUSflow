import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <nav>
  <Link to="/">Dashboard</Link>
  <Link to="/subjects">Subjects</Link>
  <Link to="/attendance">Attendance</Link>
</nav>
  )
}

export default Navbar