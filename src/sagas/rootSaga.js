import { all } from 'redux-saga/effects';
import testAPI from './testAPI.js';
import watchFirstThreeTodosCreate from './raceSaga';
import cancelSaga from './cancelSaga';
export default function* rootSaga() {
  yield all([
    testAPI(),
    cancelSaga()
    //watchFetchPostWithTimeout()
    //watchFirstThreeTodosCreate()
  ])
}