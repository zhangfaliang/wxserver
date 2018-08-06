const Keygrip = require('keygrip')
export default (ctx, next) => { 
  const SESSION = ctx.cookies.get('SESSION')
  const SESSION_SINGED = ctx.cookies.get('SESSION', {
    signed:true
  })
  next();
  
}