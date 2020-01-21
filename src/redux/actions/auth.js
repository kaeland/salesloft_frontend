import { LOGIN, ERROR, SIGN_OUT } from '../constants'

export const login = (user) => ({
  type: LOGIN, 
  user 
})

export const startLogin = (user = {}) => {
  return dispatch => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user
      })
    }
    fetch("http://localhost:3000/api/v1/login", options)
      .then(res => res.json())
      .then(data => dispatch(login(data)))
  }
}