import { SET_PEOPLE, CLEAR_PEOPLE } from '../constants'
import { fetchPeople } from '../../utils/routes'

export const setPeople = (people) => ({
  type: SET_PEOPLE, 
  people
})

export const startSetPeople = () => {
  return dispatch => {
    fetchPeople()
      .then(res => res.json())
      .then(({ people = {}, message }) => {
        if (message === "success") {
          dispatch(setPeople(people))
        }
      })
  }
}

export const clearPeople = () => ({
  type: CLEAR_PEOPLE
})