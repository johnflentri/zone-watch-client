import {
  ADD_USER_LOCATION, REMOVE_USER_LOCATION, ALL_USER_LOCATIONS
} from '../actions'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_LOCATION:
      return action.payload
    case REMOVE_USER_LOCATION:
      return action.payload
    case ALL_USER_LOCATIONS:
      console.log("all user locations action", action)
      return action.payload
    default:
      return state;
  }
}