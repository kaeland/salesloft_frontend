import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../redux/actions/auth'

class LoginPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.startLogin(this.state, this.props.history)
  }

  render() {
    return (
      <div>
        <div className="section page-title ">
          <h2 className="is-size-4">Login Below:</h2>
        </div>
        <div className="section">
          <form className="box" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input type="text" className="input" name="username" onChange={this.handleChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input type="password" className="input" name="password" onChange={this.handleChange} />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="button is-link" type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: (user, history) => dispatch(startLogin(user, history))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);