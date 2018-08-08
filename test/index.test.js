const supertest = require('supertest')
const chai = require('chai')
const app = require('../server/server.js')

const expect = chai.expect
const request = supertest( app.listen() )

// 测试套件/组
describe( '开始测试demo的GET请求', ( ) => {

  // 测试用例
  it('测试/getString.json请求', ( done ) => {
      request
        .get('/jsonp?callback=callbackData')
        .expect(200)
        .end(( err, res ) => {
            // 断言判断结果是否为object类型          
            expect(res.body).to.be.an('object')
            expect(res.body.success).to.be.an('boolean')
            expect(res.body.data).to.be.an('object')
            done()
        })
  })
})