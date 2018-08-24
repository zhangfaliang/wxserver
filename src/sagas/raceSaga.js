import { call, race, put, takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";
import { testSagaActionType } from "../actions/testAPI";

function* fetchPostWithTimeout() {
  // timeout为true的时候 就是超时

  const { posts, timeout } = yield race({
    posts: call(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              key: 666
            });
          }, 1200);
        })
    ),
    timeout: call(delay, 1000)
  });
  console.log(posts, timeout, "000000000000");
}

function* game() {
  let finished;
  while (!finished) {
    const { score, timeout } = yield race({
      score: call(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve("ok");
            }, 1000);
          });
        }
      ),
      timeout: call(delay, 1000)
    });
    if (!timeout)
    { 
      finished = true;
      console.log(score, timeout);
      
    }
  }
}

function* watchFetchPostWithTimeout(params) {
  yield takeEvery(testSagaActionType.LOAD_DATA, game);
}

export default watchFetchPostWithTimeout;
