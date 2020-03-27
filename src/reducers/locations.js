import {
  ALL_LOCATIONS
} from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_LOCATIONS:
      console.log("all locations action", action)
      return action.payload
    default:
      return state
  }
}