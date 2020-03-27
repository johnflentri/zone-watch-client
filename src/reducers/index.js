import { combineReducers } from 'redux'
import posts from './posts'
import locations from './locations'
import user from './user'

export default combineReducers({
  posts,
  locations,
  user
})