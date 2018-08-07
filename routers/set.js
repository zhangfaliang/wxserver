const set = (Router) => { 
  const setRouter = new Router();
  setRouter.get('/', async (ctx) => { 
    ctx.session.count = ctx.session.count + 1;
    ctx.body= ctx.session.count
  })
  return setRouter;
}

module.exports = set