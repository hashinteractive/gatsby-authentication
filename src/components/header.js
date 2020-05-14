import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useAuth from "../hooks/useAuth"

const Header = ({ siteTitle }) => {
  const { logout, isAuthenticated } = useAuth()
  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="m-0">
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
          <div className="w-1/2 text-right">
            { isAuthenticated 
              ? (
                  <a 
                    onClick={handleLogout}
                    className="text-white"
                    href="/">
                    Logout
                  </a>  
                )
              : (
                <Link
                  to="/login"
                  className="text-white">
                    Login
                  </Link>
                )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
