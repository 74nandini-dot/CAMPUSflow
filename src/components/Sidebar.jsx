import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  CalendarCheck,
  TrendingUp,
  Settings,
  ArrowLeftToLine,
} from 'lucide-react'
import './Sidebar.css'

function Sidebar({ isOpen, onToggle }) {
  return (
    <aside
      className={`sidebar ${
        isOpen ? 'sidebar-open' : 'sidebar-closed'
      }`}
    >
      <div className="sidebar-header">

        {isOpen && (
          <div className="sidebar-brand">
            <div className="brand-name">
              <span className="brand-my">MY</span>
              <span className="brand-campus">campus</span>
            </div>

            <button
              className="sidebar-toggle"
              onClick={onToggle}
              aria-label="Hide sidebar"
            >
              <ArrowLeftToLine size={19} />
            </button>
          </div>
        )}

      </div>

      <div className="sidebar-section">

        {isOpen && (
          <p className="sidebar-section-title">
            MAIN MENU
          </p>
        )}

        <nav className="sidebar-nav">

          <NavLink to="/" end>
            <LayoutDashboard size={18} />
            {isOpen && <span>Dashboard</span>}
          </NavLink>

          <NavLink to="/subjects">
            <BookOpen size={18} />
            {isOpen && <span>Subjects</span>}
          </NavLink>

          <NavLink to="/tasks">
            <CheckSquare size={18} />
            {isOpen && <span>Tasks</span>}
          </NavLink>

          <NavLink to="/attendance">
            <CalendarCheck size={18} />
            {isOpen && <span>Attendance</span>}
          </NavLink>

          <NavLink to="/progress">
            <TrendingUp size={18} />
            {isOpen && <span>Progress</span>}
          </NavLink>

        </nav>
      </div>

      <div className="sidebar-bottom">

        {isOpen && (
          <div className="sidebar-tip">
            <div className="tip-icon">✦</div>

            <div>
              <strong>Keep going!</strong>
              <p>Small progress every day.</p>
            </div>
          </div>
        )}

        <NavLink
          to="/settings"
          className="sidebar-settings"
        >
          <Settings size={18} />
          {isOpen && <span>Settings</span>}
        </NavLink>

      </div>
    </aside>
  )
}

export default Sidebar