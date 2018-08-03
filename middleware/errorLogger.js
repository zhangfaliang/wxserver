export default (ctx, next) => { 
  const app = ctx.app;
  app.on('error', (err, ctx) => {
    console.error('server error', err)
  });
  next()
}
