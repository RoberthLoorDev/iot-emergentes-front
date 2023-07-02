import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
  let auth = !!localStorage.getItem('token')

  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
