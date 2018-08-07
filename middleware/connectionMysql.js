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

module.exports = connection;
