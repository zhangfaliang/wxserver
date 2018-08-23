import { select ,takeEvery } from 'redux-saga/effects';import { takeEvery } from 'redux-saga';
import { takeEvery } from 'redux-saga//effects';

//正如在 call Effect 的情况中，middleware 会暂停 Generator，
//直到返回的 Promise 被 resolve。 在 take 的情况中，
//它将会暂停 Generator 直到一个匹配的 action 被发起了。 在以上的例子中，
//watchAndLog 处于暂停状态，直到任意的一个 action 被发起。
//注意，我们运行了一个无限循环的 while(true)。
// 记住这是一个 Generator 函数，它不具备 从运行至完成 的行为
// （run - to - completion behavior）。 Generator 将在每次迭代阻塞以等待 action 发起。
// function* watchAndLog(params) {
//   while (true) {
//     const action = yield ("*");
//     const state = yield select();
//     console.log('action', action);
//     console.log('state after',state);
//   }
// }
