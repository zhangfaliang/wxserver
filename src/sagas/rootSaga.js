import { all } from 'redux-saga/effects';
import testAPI from './testAPI.js';
//import watchFirstThreeTodosCreate from './todoSaga';
export default function* rootSaga() {
  yield all([
    testAPI(),
   // watchFirstThreeTodosCreate()
  ])
}