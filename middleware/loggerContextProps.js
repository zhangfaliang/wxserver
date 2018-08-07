const loggerContextProps = async (ctx, next) => {
  //console.log(ctx.request);
  //console.log(ctx.response);
  //console.log(ctx.state);
  // console.log(ctx.app);
  // console.log(ctx.request.query);
  // console.log("ip", ctx.request.ip);
  // console.log("ips", ctx.request.ips);
  // console.log("subdomains", ctx.request.subdomains);
  // console.log("request.is",ctx.request.is('html'));
  console.log('111111111111111');

  await next();
};
module.exports = loggerContextProps