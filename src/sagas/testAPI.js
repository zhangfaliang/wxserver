import { call, put, takeLatest, select } from "redux-saga";
import { loadData, loadDataSuccess, loadDataError,testSagaActionType } from "../actions/testAPI";

function* loadDataWork(action) {
  try {
    console.log(action,'444444444');
    
    const data = yield fetch(`https://www.reddit.com/r/subreddit.json`).then(
      response => response.json()
    );
    console.log(data,'6666666666666666');
    
   // yield put(loadDataSuccess(date));
  } catch (error) {
    console.log(error,'5555555');

    //yield put(loadDataError(error));
  }
}


function* listenSaga() {
  yield takeLatest(testSagaActionType.LOAD_DATA,loadDataWork)
}

export default listenSaga