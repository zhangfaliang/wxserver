import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import subreddit from './subreddit';

export default combineReducers({
  todos,
  visibilityFilter,
  subreddit
})