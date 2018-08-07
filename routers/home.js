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
    <button class="btn" id="J_UploadPictureBtn">上传图片</button>
    <hr/>
    <p>上传进度<span id="J_UploadProgress">0</span>%</p>
    <p>上传结果图片</p>
    <div id="J_PicturePreview" class="preview-picture">
    </div>
    <script src="/js/index.js"></script>
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
