const parsePostData = require("../utils/postParse");
const home = Router => {
  let homeRouter = new Router();
  homeRouter.get("/", async ctx => {
    const request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    let html = `
    <h1>koa2 upload demo</h1>
    <form method="POST" action="/upload.json" enctype="multipart/form-data">
      <p>file upload</p>
      <span>picName:</span><input name="picName" type="text" /><br/>
      <input name="file" type="file" /><br/><br/>
      <button type="submit">submit</button>
      <img src='/img/1.png'></img>

    </form>
   
    `;
    ctx.body = html;
  });
  homeRouter.post("/", async (ctx, next) => {
    let postData = ctx.request.body;
    ctx.body = postData;
  });
  return homeRouter;
};
module.exports = home;
