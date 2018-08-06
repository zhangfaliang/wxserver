const home = (Router) => { 
  let homeRouter = new Router();
  homeRouter.get('/', async (ctx) => { 
    let html =  `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
    `;
    ctx.body = html;
  })
  return homeRouter
}
module.exports = home