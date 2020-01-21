import React from 'react'

const Navbar = (props) => (
  <button onClick={() => props.history.push("/login")}>
    Login
  </button>
)

export default Navbar 