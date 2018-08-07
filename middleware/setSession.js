// 将session存放在MySQL数据库中
// 需要用到中间件
// koa-session-minimal 适用于koa2 的session中间件，提供存储介质的读写接口 。
// koa-mysql-session 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作。
// 将sessionId和对于的数据存到数据库
// 将数据库的存储的sessionId存到页面的cookie中
// 根据cookie的sessionId去获取对于的session信息
const setSession = async (ctx, next) => {
  if (!ctx.session) {
    ctx.session = {
      user_id: Math.random()
        .toString(36)
        .substr(2),
      count: 1
    };
  }
  next();
};
module.exports = setSession;
