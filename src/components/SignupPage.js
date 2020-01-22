import React from 'react'
import { connect } from 'react-redux'
import { startSignup } from '../redux/actions/auth'
import Form from './Form'

class SignupPage extends React.Component {
  state = {
    username: '',
    password: '',
    bio: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.startSignup(this.state, this.props.history)
  }

  render() {
    return (
      <Form pageTitle={"Sign Up Below:"} handleSubmit={this.handleSubmit}>
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
          <label className="label">Bio</label>
          <div className="control">
            <textarea className="textarea" name="bio" onChange={this.handleChange}></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="button is-link" type="submit" value="Sign up" />
          </div>
        </div>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSignup: (user, history) => dispatch(startSignup(user, history))
  }
}

export default connect(null, mapDispatchToProps)(SignupPage);