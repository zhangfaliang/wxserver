const parsePostData = require("../utils/postParse");
const home = Router => {
  let homeRouter = new Router();
  homeRouter.get("/", async ctx => {
    const app = ctx.app;
    const data = await app.query(app.pool,'SELECT * FROM _mysql_session_store')
  
    let html = `
    <button class="btn" id="J_UploadPictureBtn">上传图片</button>
    <hr/>
    <p>上传进度<span id="J_UploadProgress">0</span>%</p>
    <p>上传结果图片</p>
    <div id="J_PicturePreview" class="preview-picture">
    </div>
    <script src="/js/index.js"></script>
    `;
    console.log(data,'88888888888888888');
    
    ctx.body = html;
    
  });
  homeRouter.post("/", async (ctx, next) => {
    let postData = ctx.request.body;
    ctx.body = postData;
  });
  return homeRouter;
};
module.exports = home;
