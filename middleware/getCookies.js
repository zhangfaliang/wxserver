const Keygrip = require('keygrip')
const getCookoes =  (ctx, next) => { 
  const SESSION = ctx.cookies.get('SESSION')
  const SESSION_SINGED = ctx.cookies.get('SESSION', {
    signed:true
  })
  next();
}

module.exports =  getCookoes;