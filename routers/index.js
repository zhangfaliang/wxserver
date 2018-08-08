const Router = require("koa-router");
const home = require('./home')(Router);
const page = require('./page')(Router);
const set = require('./set')(Router);
const upload = require('./upload')(Router);
const jsonp = require('./jsonp')(Router)
const routers = () => {
  //装载所有子路由
  let router = new Router();
  router.use("/", home.routes(), home.allowedMethods());
  router.use("/page", page.routes(), page.allowedMethods());
  router.use("/set", set.routes(), set.allowedMethods());
  router.use("/api", upload.routes(), upload.allowedMethods());
  router.use('/jsonp', jsonp.routes(), jsonp.allowedMethods());
  return router;
};
module.exports = routers();
