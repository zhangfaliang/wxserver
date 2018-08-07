const responseTime =  async (ctx, next) => { 
  const start = Date.now();
  next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time',`${ms}ms`)
}

module.exports = responseTime;