import { combineReducers } from "redux";

import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from "../constants/todoActionType";

const initialState = {
  VisibilityFilters: VisibilityFilters.SHOW_ALL,
  todos: []
};

// function todoApp(state, action) {
//   if (typeof state === 'undefined') {
//     return initialState
//   }
//   //这里暂不处理任何 action
//   // 仅仅返回传入的state
//   return state;
// }

// //这里一技巧可以使用 es6 参数默认值语法 来精简代码；

// function todoApp(state = initialState, action) {
//   //这里暂不处理任何 action
//   // 仅仅返回传入的state
//   return state;
// }

//现在要处理set_visibility_filter 需要做的只是改变state中的 visibilityFilter、
// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, { visibilityFilter: action.filter });
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       });
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: state.todos.map((todo, index) => {
//           if (index === action.index) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             });
//           }
//           return todo;
//         })
//       });
//     default:
//       break;
//   }
// }
// 不要修改 state。使用 Object.assign() 新键一个副本，不能这样使用
// Object.assign(state,{visibilityFilter:action.filter}),因为它会改变第一参数的值。
//你必须把第一个参数设置为空对象。也可以开启对es7提案对象运算符的支持，从而使用{...state,newState}达到相同目的

//2 在default 情况下返回旧的state。遇到未知的action时 一定要返回旧的state。

//拆分 reducer 目前我们的reduce开起来不叫冗长

// function todoApp(state=initialState,action) {
//     switch (action.type) {
//       case SET_VISIBILITY_FILTER:
//         return {
//           ...state,
//           VisibilityFilters:action.filter,
//         }
//       case ADD_TODO:
//         return {
//           ...state,
//           todos:todos(state.todos, action)
//         }
//       case TOGGLE_TODO:
//         return {
//           ...state,
//           todos:todos(state.todos, action)
//         }
//       default:
//         return state;
//     }
// }

// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos:todos(state.todos,action)
//   }

// }
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.type,
          component: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    default:
      return state;
  }
}
function visibilityFilters(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
    return state;
  }
}

export default combineReducers({
  visibilityFilters,
  todos
});
