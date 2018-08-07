const Keygrip = require('keygrip')
const getCookoes = async(ctx, next) => { 
  const keys = ctx.keys;
  const SESSION = ctx.cookies.get('SESSION')
  if (SESSION&&keys&&keys.verify('bieberschnitzel', SESSION)) { 
    console.log(SESSION,'cookie is ok');
  }
  await  next();
}

module.exports =  getCookoes;