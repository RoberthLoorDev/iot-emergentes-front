import { Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './routes/Route.ProtectedRoute'
import './style.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
