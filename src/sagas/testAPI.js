import { call, put, takeLatest, select } from "redux-saga";
import { loadData, loadDataSuccess, loadDataError,testSagaActionType } from "../actions/testAPI";

function* loadDataWork() {
  try {
    yield put(loadData());
    const data = yield fetch(`https://www.reddit.com/r/${subreddit}.json`).then(
      response => response.json()
    );
    yield put(loadDataSuccess(date));
  } catch (error) {
    yield put(loadDataError(error));
  }
}


function* listenSaga() {
  yield takeLatest(testSagaActionType.LOAD_DATA,loadDataWork)
}

export default listenSaga