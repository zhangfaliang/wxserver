const mysql = require("mysql");
const { db } = require("../default.config.js");
const connection = async (ctx, next) => {
  if (!ctx.connection) {
    try {
      const connectionMysql = await mysql.createConnection(db);
      ctx.connection = connectionMysql;
      console.log('connectionMysql sucess');
    } catch (error) {
      console.log('error');
    }
    
  }

  await next();
};
//注意：一个事件就有一个从开始到结束的过程，数据库会话操作执行完后，就需要关闭掉，以免占用连接资源。
module.exports = connection;
