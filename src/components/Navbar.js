import React from 'react'
import { connect } from 'react-redux'
import { signout } from '../redux/actions/auth'
import { clearPeople } from '../redux/actions/people'

const Navbar = (props) => (
  <div>
  { localStorage.getItem("jwt") !== null 
    ? (
      <button onClick={() => handSignOut(props)}>
        Logout
      </button>
    ) : (
      <button onClick={() => props.history.push("/login")}>
        Login
      </button>
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