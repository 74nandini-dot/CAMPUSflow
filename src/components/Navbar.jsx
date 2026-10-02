import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/subjects">Subjects</Link>
    </nav>
  )
}

export default Navbar