import { SET_PEOPLE, CLEAR_PEOPLE } from '../constants'

export default function(state = {}, action) {
  switch(action.type) {
    case SET_PEOPLE: 
      return { ...state, ...action.people }
    case CLEAR_PEOPLE: 
      return {}
    default: 
      return state  
  }
}