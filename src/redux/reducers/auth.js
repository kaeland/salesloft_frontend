import { LOGIN, ERROR, SIGN_OUT } from '../constants'

export default function (state = {}, action) {
  switch (action.type) {
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