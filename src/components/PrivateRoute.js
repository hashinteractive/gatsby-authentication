// import ...
import React from "react"
import { navigate } from "gatsby"
import useAuth from "../hooks/useAuth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [state] = useAuth()
  const isAuthenticated = state.loggedIn && state.user
  if (!isAuthenticated && location.pathname !== `/app`) {
    navigate("/app")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute