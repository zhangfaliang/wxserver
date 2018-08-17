import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {  postsBySubreddit,
  selectedSubreddit} from './subreddit';

export default combineReducers({
  todos,
  visibilityFilter,
  postsBySubreddit,
  selectedSubreddit
})