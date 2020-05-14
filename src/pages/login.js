import React from "react"
import { Link } from "gatsby"
import Login from '../components/Login'

import Layout from "../components/layout"

const LoginPage = ({ location }) => {
  const { state: routeState } = location
  const redirect = !routeState
    ? '/app'
    : routeState.redirect === 'app'
      ? '/app'
      : `/app/${routeState.redirect}`
  
  return (
    <Layout>
      <h1>Login</h1>
      <p>Please use your credentials to login</p>
      <div>
        <Login redirect={redirect} />
      </div>
      <Link to="/">Go to Home Page</Link>
    </Layout>
  )
}

export default LoginPage