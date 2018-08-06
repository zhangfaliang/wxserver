const parsePostData = require('../utils/postParse')
const home = (Router) => { 
  let homeRouter = new Router();
  homeRouter.get('/', async (ctx) => {
    const request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    let html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
      <img src='/img/1.png'></img>
    </form>
    `;
    ctx.body = html;
    // ctx.body = {
    //   req_query,
    //   req_querystring,
    //   ctx_query,
    //   ctx_querystring
    // };
  })
  homeRouter.post('/', async (ctx, next) => { 
    let postData = ctx.request.body
    ctx.body = postData

  })
  return homeRouter
}
module.exports = home