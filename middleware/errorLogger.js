const createError = require('http-errors')

const errorLogger =async (ctx, next) => { 
  const app = ctx.app;
  //ctx.throw(400, 'name required', { user: 'user' });
  //createError(401, 'Please login to view this page.')
  app.on('error', (err, ctx) => {
    console.error('server error', err)
  });
  await next()
}

module.exports = errorLogger
