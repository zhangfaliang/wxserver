//解析上下文里node原生请求的post参数
const parsePostData =(ctx)=>{ 
  return new Promise((resolve,reject) => { 
    try {
      let postData = '';
      ctx.req.addListener('data', (data) => { 
        postData += data;
      })
      ctx.req.addListener('end', () => { 
        let parseData = parseQueryStr(postData)
        resolve(parseData)
      })
    } catch (error) {
        reject(error)
    }
  })
}

const parseQueryStr = (queryStr) => {
  let queryData = {};
  let queryStrList = queryStr.split('&')
  console.log(queryStrList);
  for (let [index, queryStr] of queryStrList.entries()) { 
    let itemList = queryStr.split('=')
    queryData[itemList[0]]=decodeURIComponent(itemList[1])
  }  
  return  queryData
}

module.exports = parsePostData