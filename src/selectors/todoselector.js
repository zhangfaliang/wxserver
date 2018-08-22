import { createSelector } from 'reselect';
const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => (state.todos.present);
const getKeyword = (state) => state.keyword;

 const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => { 
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos        
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t=>!t.completed)
    }
  }

)
const getVisibleTodosFilterdByKeyword = createSelector(
  [getVisibleTodos,getKeyword],
  (visibilityTodos, keyword) => visibilityTodos.filter(todos => todos.text.indexOf(keyword)>-1)
)

export { 
  getVisibleTodos
}