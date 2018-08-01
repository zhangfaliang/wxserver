const KeyGrip = require('keygrip')
export default function setUpAppProps(app) {
  app.env = "development"//app.env 默认是 NODE_ENV 或 "development"
//   app.proxy 当真正的代理头字段将被信任时
// app.subdomainOffset 对于要忽略的 .subdomains 偏移[2]
  app.keys = ['im a newer secret', 'i like turtle'];
  app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256')
  Object.defineProperty(app.context, 'test-liang', {
    get:function (params) {
      return '0.0.0.0'
    }
  })
  
}