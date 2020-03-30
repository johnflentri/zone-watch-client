import { combineReducers } from 'redux'
import user from './user'
import locations from './locations'
import posts from './posts'
import comments from './comments'

export default combineReducers({
  user,
  locations,
  posts,
  comments
})