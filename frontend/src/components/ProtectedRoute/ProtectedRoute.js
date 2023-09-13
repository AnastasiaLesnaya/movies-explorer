import React from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ component: Component, ...props }) => {
  if (props.isUserLoggedIn) return <Component {...props} />
  else return <Navigate to="/" />
}

export default ProtectedRoute
