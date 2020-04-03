import {
  LOGGED_IN, CURRENT_USER, USER_GEO
} from '../actions'

const initialState = ''

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload;
    case USER_GEO:
      return action.payload;
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}