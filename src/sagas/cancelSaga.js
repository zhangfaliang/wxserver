import { take, put, call, fork, cancel, cancelled } from "redux-saga/effects";
import { delay } from "redux-saga";
import { testSagaActionType } from "../actions/testAPI";

function* bgSync() {
  try {
    while (true) {
      const result = yield call(() => {
        return new Promise((resolve, rejecr) => {
          setTimeout(() => {
            resolve({
              status: 200,
              massage: "ok",
              data: {}
            });
          }, 0);
        });
      });
      console.log(result, "3333333333");
      yield delay(1000);
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Sync cancelled!");
    // if (yield cancelled()) {
    //   console.log("Sync cancelled!");
    // }
  }
}

function* main() {
  while (yield take(testSagaActionType.LOAD_DATA_START)) {
    //启动后台任务
    //console.log(yield take(testSagaActionType.LOAD_DATA_START),'1111111111111111');
    
    const bgSyncTask = yield fork(bgSync);
    //等待用户停止操作
    yield take(testSagaActionType.LOAD_DATA_STOP);
    // 用户点击停止，取消后台任务
    // 这会导致被 fork的bgsyc任务跳进finally区块
    yield cancel(bgSyncTask);
  }
}

export default main;
