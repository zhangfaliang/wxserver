require("babel-register")({
  // Optional ignore regex - if any filenames **do** match this regex then they
  // aren't compiled.
  //ignore: /regex/,
  // Ignore can also be specified as a function.
  // ignore: function(filename) {
  //   if (filename === "/path/to/es6-file.js") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // },
  // Optional only regex - if any filenames **don't** match this regex then they
  // aren't compiled
  //only: /my_es6_folder/,
  // Setting this will remove the currently hooked extensions of .es6, `.es`, `.jsx`
  // and .js so you'll have to add them back if you want them to be used again.
  //extensions: [".es6", ".es", ".jsx", ".js"],
  // Setting this to false will disable the cache.
  //cache: true
});
const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
const XResponseTime = require('../middleware/responseTime')
const logger = require('../middleware/logger')
const loggerContextProps = require('../middleware/loggerContextProps')
const setUpAppProps = require('../middleware/setUpApp')
const errorLog = require('../middleware/errorLogger')
const setCookies = require('../middleware/setCookies')
const getCookies = require('../middleware/getCookies')
const router = require('../routers/index')
const app = new Koa();
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../static'
app.use(static(
  path.join(__dirname,staticPath)
))

// 使用ctx.body解析中间件
app.use(bodyParser())

// set app props
app.use(setUpAppProps)
//setCookies
app.use(setCookies)
//getCookies
app.use(getCookies)
// X-Response-time 中间件
app.use(XResponseTime);
//logger 中间件
app.use(logger);
//loggerContextProps 中间件
app.use(loggerContextProps);
//自定义error 监听
app.use(errorLog);
app.use(router.routes()).use(router.allowedMethods())
app.listen(5000);
