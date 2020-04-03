import {
  ALL_LOCATIONS, CREATE_LOCATION
} from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_LOCATIONS:
      return action.payload
    case CREATE_LOCATION:
      return [action.payload, ...state]
    default:
      return state
  }
}