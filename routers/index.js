const Router = require("koa-router");
const home = require('./home')(Router);
const page = require('./page')(Router)
const routers = () => {
  //装载所有子路由
  let router = new Router();
  router.use("/", home.routes(), home.allowedMethods());
  router.use("/page", page.routes(), page.allowedMethods());
  return router;
};
module.exports = routers();