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
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')
const views = require('koa-views')

const XResponseTime = require('../middleware/responseTime')
const logger = require('../middleware/logger')
const loggerContextProps = require('../middleware/loggerContextProps')
const setUpAppProps = require('../middleware/setUpApp')
const errorLog = require('../middleware/errorLogger')
const setCookies = require('../middleware/setCookies')
const getCookies = require('../middleware/getCookies')
const router = require('../routers/index')
const setSession = require('../middleware/setSession')
const defaultConfig = require('../default.config')
const connection = require('../middleware/connectionMysql')
const createPool = require('../middleware/createPool')
const app = new Koa();
// 静态资源目录对于相对入口文件index.js的路径
//const staticPath = '../static'
const staticPath = '../dist'

//连接数据库
app.use(createPool)
//MysqlSession 中间件
let store = new MysqlSession(defaultConfig.db);
//静态资源中间件
app.use(session({
  key: 'SESSION_ID',
  store: store,
  cookie:defaultConfig.cookies
}))
//静态资源中间件
app.use(static(
  path.join(__dirname,staticPath)
))
// 使用ctx.body解析中间件
app.use(bodyParser())
// set app props
app.use(setUpAppProps)
//setCookies
// app.use(setCookies)
// //getCookies
// app.use(getCookies)
// X-Response-time 中间件
app.use(setSession)
app.use(router.routes()).use(router.allowedMethods())

app.use(XResponseTime);
//logger 中间件
app.use(logger);
//loggerContextProps 中间件
app.use(loggerContextProps);
//自定义error 监听
app.use(errorLog);
// app.use(views(path.join(__dirname, './view'), {
//   extension: 'ejs'
// }))

// app.use( async ( ctx ) => {
//   let title = 'hello koa2'
//   await ctx.render('index', {
//     title,
//   })
// })

app.listen(7000);
module.exports = app
