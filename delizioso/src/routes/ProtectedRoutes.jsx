import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { userData } from "../helper"

const ProtectedRoutes = () => {
  const { jwt } = userData()

  const location = useLocation()

  return jwt ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  )
}

export default ProtectedRoutes
