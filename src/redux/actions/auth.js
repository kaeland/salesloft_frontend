import { LOGIN, ERROR, SIGN_OUT } from '../constants'
import { loginFetch } from '../../utils/routes'

export const login = (user) => ({
  type: LOGIN,
  user
})

export const startLogin = (user = {}) => {
  return dispatch => {
    loginFetch(user)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("jwt", data.jwt)
        dispatch(login(data))
      })
  }
}