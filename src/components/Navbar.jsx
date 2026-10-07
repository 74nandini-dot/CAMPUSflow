import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  CalendarCheck,
} from 'lucide-react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <span className="logo-campus">CAMPUS</span>
        <span className="logo-flow">Flow</span>
      </div>

      {/* NAVIGATION */}
      <div className="navbar-links">

        <NavLink to="/" end>
          <LayoutDashboard size={17} strokeWidth={2.2} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/subjects">
          <BookOpen size={17} strokeWidth={2.2} />
          <span>Subjects</span>
        </NavLink>

        <NavLink to="/tasks">
          <CheckSquare size={17} strokeWidth={2.2} />
          <span>Tasks</span>
        </NavLink>

        <NavLink to="/attendance">
          <CalendarCheck size={17} strokeWidth={2.2} />
          <span>Attendance</span>
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar