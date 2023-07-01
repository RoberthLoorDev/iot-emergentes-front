import { Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home'
import Login from './pages/Login'
//styles
import './style.css'
//components

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
