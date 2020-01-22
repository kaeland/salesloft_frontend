import { LOGIN, ERROR, SIGN_OUT, SIGN_UP } from '../constants'

export default function (state = {}, action) {
  switch (action.type) {
    case SIGN_UP: 
      return { ...state, ...action.user }
    case LOGIN:
      return { ...state, ...action.user }
    case ERROR:
      return { ...state, message: action.message }
    case SIGN_OUT:
      return {}
    default:
      return state
  }
}