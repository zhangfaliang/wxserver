const mysql = require("mysql");
const { db } = require("../default.config.js");
const { query } =require('../utils/async-db')

//一般情况下操作数据库是很复杂的读写过程，不只是一个会话，
//如果直接用会话操作，就需要每次会话都要配置连接参数。所以这时候就需要连接池管理会话。
const createPool = async (ctx, next) => { 
  try {
    const app = ctx.app;
    if (!app.pool) { 
      const pool = mysql.createPool(db);
      app.pool = pool;
      app.query = query;
      console.log('createPool sucess');
    }
  } catch (error) {
    console.log(`createPool ${error}`);
  }
 
  await next();
}
module.exports=createPool