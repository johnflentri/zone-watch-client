import {
  ALL_POSTS, ALL_LOCATION_POSTS, NEW_POST
} from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_POSTS:
      return action.payload
    case ALL_LOCATION_POSTS:
      return action.payload
    case NEW_POST:
      return [action.payload, ...state]
    default:
      return state
  }
}