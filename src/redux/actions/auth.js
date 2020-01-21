import { LOGIN, ERROR, SIGN_OUT } from '../constants'
import { loginFetch } from '../../utils/routes'

export const login = (user) => ({
  type: LOGIN,
  user
})

export const error = (message) => ({
  type: ERROR,
  message
})

export const startLogin = (user = {}, history) => {
  return dispatch => {
    loginFetch(user)
      .then(res => res.json())
      .then(({ user = {}, jwt = '', message }) => {
        if (message === "success") {
          localStorage.setItem("jwt", jwt)
          dispatch(login(user))
          history.push("/")
        } else {
          dispatch(error(message))
        }
      })
  }
}