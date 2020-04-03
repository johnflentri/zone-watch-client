import {
  ALL_LOCATIONS, CREATE_LOCATION
} from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_LOCATIONS:
      console.log("all locations ACTION brutha", action)
      return action.payload
    case CREATE_LOCATION:
      console.log("create location ACTION brutha", action)
      return [action.payload, ...state]
    default:
      return state
  }
}