import { take, put } from 'redux-saga';


function* watchFirstThreeTodosCreate() {
    for (let i= 0; i <3; i++) {
     const action = yield take('ADD_TODO')
    }
  alert('祝贺您')
}

export default watchFirstThreeTodosCreate


// take  effect 等待store中指定的 action call effect 进行同步调用  put effect来发起action到store
//call 是一个会阻塞的 Effect。即 Generator 在调用结束之前不能执行或处理任何其他事情。