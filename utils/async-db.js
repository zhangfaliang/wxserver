/**
 * 
 * @param {*} pool  createPool对象
 * @param {*} sql  sql语句
 * @param {*} values
 */
const query = (pool, sql, values) => { 
  return new Promise((resolve,reject) => { 
    pool.getConnection((err,connection) => { 
      if (err) {
        reject(err)
      } else { 
        connection.query(sql, values, (err, rows) => { 
          if (err) {
            reject(err)
          } else { 
            resolve(rows)
          }
          connection.release();
          console.log('mysql release');
          
        })
      }
    })
  })
}

module.exports = {query}