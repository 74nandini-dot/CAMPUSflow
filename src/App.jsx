import Tasks from './pages/Tasks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Subjects from './pages/Subjects'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard name="Nandini" semester="3rd Semester" />}
        />

        <Route
          path="/subjects"
          element={<Subjects />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App