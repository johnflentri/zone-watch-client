import {
  ADD_USER_LOCATION, REMOVE_USER_LOCATION
} from '../actions'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_LOCATION:
      console.log("add user location action", action)
      return action.payload
    case REMOVE_USER_LOCATION:
      console.log("remove user location action", action)
      return action.payload
    default:
      return state;
  }
}