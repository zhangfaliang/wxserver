import { call, put, takeLatest, select,takeEvery } from "redux-saga/effects";
import { loadData, loadDataSuccess, loadDataError,testSagaActionType } from "../actions/testAPI";

function* loadDataWork(action) {
  try {    
    const data = yield new Promise((resolve,reject) => { 
      setTimeout(() => {
        resolve({})
      }, 1000);
    })
    console.log(data,'6666666666666666');
    yield put(loadDataSuccess(data));
  } catch (error) {
    yield put(loadDataError(error));
  }
}


function* listenSaga() {
  yield takeEvery(testSagaActionType.LOAD_DATA,loadDataWork)
}

export default listenSaga