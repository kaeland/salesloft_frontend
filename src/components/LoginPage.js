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
    this.props.startLogin(this.state)
  }

  render() {
    return (
      <div>
        <h1>Login Below:</h1>
        <form onSubmit={this.handleSubmit}> 
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="text" name="password" onChange={this.handleChange} />
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { startLogin })(LoginPage);