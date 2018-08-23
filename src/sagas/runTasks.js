import { call } from 'redux-saga';

const [users, repos] = yield[
  call(fetch, '/user'),
  call(fetch,'/repos')

]
//  当我们需要 yield 一个包含effect的数组 generator 会被阻塞直到所有的effects都执行完毕，或者当一个
// effect 被拒绝（ 就像 promise.all 的行为）