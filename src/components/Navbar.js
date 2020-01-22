import React from 'react'
import { connect } from 'react-redux'
import { signout } from '../redux/actions/auth'
import { clearPeople } from '../redux/actions/people'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'

class Navbar extends React.Component {
  state = {
    showMenu: false
  }

  handleSignOut = () => {
    this.props.clearPeople()
    this.props.signout()
    localStorage.removeItem("jwt")
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        {localStorage.getItem("jwt") !== null
          ? (
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <Link className="navbar-item is-size-3" to="/">Salesloftify</Link>
                <a onClick={() => this.setState({ showMenu: !this.state.showMenu })} role="button" class={`navbar-burger ${this.state.showMenu && "is-active"}`} aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div className={`navbar-menu ${this.state.showMenu && "is-active"}`}>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <button className="button is-success is-rounded" onClick={() => this.handleSignOut()}>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ) : (
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <Link className="navbar-item is-size-3" to="/">Salesloftify</Link>
                <a onClick={() => this.setState({ showMenu: !this.state.showMenu })} role="button" class={`navbar-burger ${this.state.showMenu && "is-active"}`} aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div className={`navbar-menu ${this.state.showMenu && "is-active"}`}>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <button className="button is-success is-rounded" onClick={() => this.props.history.push("/login")}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          )}
      </div>
    )
  }
}

export default connect(null, { signout, clearPeople })(Navbar) 