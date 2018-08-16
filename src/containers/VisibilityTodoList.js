import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo";
import TodoList from "../components/todo/TodoList";
import { fetchPosts } from '../actions/subreddit';
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
  }
};
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
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
