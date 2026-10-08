import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  CalendarCheck,
  Briefcase,
} from 'lucide-react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <NavLink to="/" className="navbar-logo">
        <span className="logo-campus">CAMPUS</span>
        <span className="logo-flow">Flow</span>
      </NavLink>

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

        <NavLink to="/placement">
          <Briefcase size={17} strokeWidth={2.2} />
          <span>Placement</span>
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar