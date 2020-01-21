import { SET_PEOPLE } from '../constants'

export default function(state = {}, action) {
  switch(action.type) {
    case SET_PEOPLE: 
      return { ...state, ...action.people }
    default: 
      return state  
  }
}