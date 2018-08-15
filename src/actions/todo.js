//action 是把数据从应用传到store的有效载荷。它是store数据的唯一来源 一般会通过store.disparch()将action传到store

//添加todo 任务的actions是这样的：
let  nextTodoId = 0
import {
  ADD_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
} from "../constants/todoActionType";
//Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。
//在 Redux 中的 action 创建函数只是简单的返回一个 action:

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
    id : ++nextTodoId

  };
};
//这样做将使action创建函数更容易被移至和测试

export const toggleTodo = id => {
  return { type: TOGGLE_TODO, id };
};

export const setVisibilityFilter = (filter) => {
  return { type :SET_VISIBILITY_FILTER,filter}
}