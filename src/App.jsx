import { useState } from 'react'
import './App.css'
import { Menu } from 'lucide-react'
import Tasks from './pages/Tasks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Subjects from './pages/Subjects'
import Attendance from './pages/Attendance'
import Placement from './pages/placement'
import { SubjectProvider } from './context/SubjectContext'
import { TaskProvider } from './context/TaskContext'
import { AttendanceProvider } from './context/AttendanceContext'
import { PlacementProvider } from './context/PlacementContext'


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen((previous) => !previous)
  }

  return (
    <PlacementProvider>
    <SubjectProvider>
      <TaskProvider>
        <AttendanceProvider>
          <BrowserRouter>

            <Sidebar
              isOpen={sidebarOpen}
              onToggle={toggleSidebar}
            />

            {!sidebarOpen && (
              <button
                className="sidebar-show-button"
                onClick={toggleSidebar}
                aria-label="Show sidebar"
              >
                <Menu size={21} />
              </button>
            )}

            <div
              className={`app-main ${
                sidebarOpen
                  ? 'sidebar-is-open'
                  : 'sidebar-is-closed'
              }`}
            >
              <Navbar />

              <main className="page-content">
                <Routes>

                  <Route
                    path="/"
                    element={
                      <Dashboard
                        name="Nandini"
                        semester="3rd Semester"
                      />
                    }
                  />

                  <Route
                    path="/subjects"
                    element={<Subjects />}
                  />

                  <Route
                    path="/tasks"
                    element={<Tasks />}
                  />

                  <Route
                    path="/attendance"
                    element={<Attendance />}
                  />

                  <Route
                    path="/placement"
                    element={<Placement />}
                  />

                </Routes>
              </main>

            </div>

          </BrowserRouter>
        </AttendanceProvider>
      </TaskProvider>
    </SubjectProvider>
    </PlacementProvider>
  )
}

export default App