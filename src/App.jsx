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
      </Routes>
    </BrowserRouter>
  )
}

export default App