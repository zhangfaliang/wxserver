import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo";
import TodoList from "../components/todo/TodoList";
import { fetchPosts } from '../actions/subreddit';
import { getVisibleTodos } from '../selectors/todoselector';

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state)
  };
};

const mapDisPatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    },
    getSubreddit: id => { 
      dispatch(fetchPosts(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(TodoList);
