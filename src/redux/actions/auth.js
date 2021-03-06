import { LOGIN, ERROR, SIGN_OUT, SIGN_UP } from '../constants'
import { loginFetch, signupFetch } from '../../utils/routes'

export const login = (user) => ({
  type: LOGIN,
  user
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

export const signup = (user) => ({
  type: SIGN_UP,
  user
})

export const startSignup = (user = {}, history) => {
  return dispatch => {
    signupFetch(user)
      .then(res => res.json())
      .then(({ user = {}, jwt = '', message }) => {
        if (message === "success") {
          localStorage.setItem("jwt", jwt)
          dispatch(signup(user))
          history.push("/")
        } else {
          dispatch(error(message))
        }
      })
  }
}

export const error = (message) => ({
  type: ERROR,
  message
})

export const signout = () => ({
  type: SIGN_OUT
})