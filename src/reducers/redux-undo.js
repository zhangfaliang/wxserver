// {{
//   past   past:: Array Array<<TT>>,,
//   present   present::  TT,,
//   future   future:: Array Array<<TT>>
//  }}

//处理 undo
// 移除past 中的最后一个元素
// 将上一步移除的元素赋予 present
// 将原来的 present 追加到future的最后面
//处理redo
// 移除future中的第一个元素。
//将上一步移除的元素赋予 present
// 将present 追加到past的最后面
//处理其他action
// 将当前的 present 追加到past
//将处理完action 所产生的新的state 赋予 present
// 清空future

const initialState = {
  past: [],
  present: null,
  future: []
};
function undoable(state = initialState, action) {
  const { past, present, future } = state;
  switch (action.type) {
    case 'UNDO':
      const previous = past[past.length - 1];
      const newPast = past.splice(0, past.length - 1);
      return {
        ...state,
        past: newPast,
        present: previous,
        future:[present,...future]
      }
    case 'REDO':
      const next = future[0];
      const newFuture = future.slice(1)
      return {
        ...state,
        past: [present, ...past],
        future:newFuture
      }  
    default:
      // 如何处理state
      return state
  }
}

function undoable(reducer) { 
  const initialState = {
    past: [],
    present: ruducer(undefined, {}),
    future:[]
  }
  // 返回一个可以执行撤销和重做的新的reducer

  return function (state = initialState, action) { 
    const { past, present, future } = state;
    switch (action.type) { 
      case 'UNDO':
        const pervious = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present:pervious,
          future:[present,...future]
        }
      case 'REDO':
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past,present],
          present: next,
          future:newFuture
        }
      default:
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPast,
          future:[]
        }
    }
  }
}

