import {
  ALL_POSTS, ALL_LOCATION_POSTS, NEW_POST
} from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_POSTS:
      console.log("all posts action", action)
      return action.payload
    case ALL_LOCATION_POSTS:
      console.log("all location posts action", action)
      return action.payload
    case NEW_POST:
      console.log("new posts action", action)
      return [action.payload, ...state]
    default:
      return state
  }
}