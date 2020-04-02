import {
  ADD_USER_LOCATION, REMOVE_USER_LOCATION
} from '../actions'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_LOCATION:
      return action.payload
    case REMOVE_USER_LOCATION:
      return action.payload
    default:
      return state;
  }
}