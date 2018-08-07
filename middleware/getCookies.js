const Keygrip = require('keygrip')
const getCookoes = (ctx, next) => { 
  const keys = ctx.keys;
  const SESSION = ctx.cookies.get('SESSION')
  if (keys.verify('bieberschnitzel', SESSION)) { 
    console.log(SESSION,'cookie is ok');
  }
  next();
}

module.exports =  getCookoes;