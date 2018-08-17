const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception!", err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    });
    throw err;
  }
};
// 简单
// const createMiddleWare = (store,middlewras) => { 
//   middlewras = amiddlewras.split();
//   middlewras = middlewras.reverse();
//   middlewras.forEach(middlewra=>store.dispatch=middlewra(store))
// }

const createMiddleWare = (store,middlewares) => { 
  middlewares = middlewares.split();
  middlewares = middlewares.reverse();
  const dispatch = store.dispatch;
  middlewares.forEach((middleware) => { 
    dispatch=middlewares(store)(dispatch)
  } 
  )
  return {
    ...store,
    dispatch
      } 
}
//一个大的闭包  一直没有被释放
// 每个middleware 都会返回一个 地址一直没有被释放知道 吃法dispatch 
// 最后一个 middleware先执行
// 
export { logger, crashReporter };
