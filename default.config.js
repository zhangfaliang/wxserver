const defaultConfig = {
  port:5000 ,
  db: {
    user: 'root',
    password: '111111',
    database: 'mysql',
    host: '127.0.0.1',

    // DATABASE: 'mysql',
    // USERNAME: 'root',
    // PASSWORD: '111111',
    // PORT: '3306',
    // HOST:'127.0.0.1'
  },
  cookies: {
    maxAge: '', // cookie有效时长
    expires: '',  // cookie失效时间
    path: '', // 写cookie所在的路径
    domain: '', // 写cookie所在的域名
    httpOnly: '', // 是否只用于http请求中获取
    overwrite: '',  // 是否允许重写
    secure: '',
    sameSite: '',
    signed: '',
  },
  upload_file: {
    address: ['./static/','upload_file'],
    file_type: {
      common: 'common',
      album:'album'
    }
  }
}
module.exports = defaultConfig