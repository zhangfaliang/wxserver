//take 是等待store发起一个 action
// call 是一个会阻塞的effect 它是同步调用，即generator在调用结束之前不能只有或处理任何其他事情。
// put是 effect发起action 到store
//fork 当我们发起一个fork任务的时候，任务会在后台启动，调用者可以继续它自己的流程，而不用等待被fork结束
//cancel  取消fork任务
import { fork, call, take, put, cancel, takeLatest } from "redux-saga/effects";
function* authorize(user, password) {
  try {
    const token = yield call(
      new Promise(
        (resolve, reject) => {
          setTimeout(() => {
            resolve("wekldsjofkljsalfkj-w423");
          }, 1000);
        },
        user,
        password
      )
    );
    yield (sessionStorage.setItem, "token", token);
  } catch (err) {
    console.log(err);
  } finally {
    // 处理一些lodding 标识符
  }
}
function* loginFlow() {
  while (true) {
    const { user, password } = yield take("LOGIN_REQEST");
    // fork 返回的结果是一个task object
    const task = yield fork(authorize, user, password);
    if (action.type === "LOGOUT") cancel(task);

    yield take("LOGOUT");
    yield call(sessionStorage.clear, "token", token);
  }
}
//TODO 待处理
function* watchLoginFlow(params) {
  yield takeLatest('LOGIN_REQEST',loginFlow)
}

