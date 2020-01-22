import React from 'react'
import { connect } from 'react-redux'
import { signout } from '../redux/actions/auth'
import { clearPeople } from '../redux/actions/people'
import { Link } from 'react-router-dom'

const Navbar = (props) => (
  <div>
    {localStorage.getItem("jwt") !== null
      ? (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Salesloftify</Link>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <button className="button" onClick={() => handSignOut(props)}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Salesloftify</Link>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <button className="button" onClick={() => props.history.push("/login")}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
  </div>
)

const handSignOut = (props) => {
  props.clearPeople()
  props.signout()
  localStorage.removeItem("jwt")
  props.history.push("/")
}

export default connect(null, { signout, clearPeople })(Navbar) 