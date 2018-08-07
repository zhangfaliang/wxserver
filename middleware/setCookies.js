const Keygrip = require("keygrip");
const assert = require("assert"); //断言
let keylist, keys, hash, index;
const setCookies = (ctx, next) => {
  // 3.1  maxAge：一个数字，表示Date.now() 到期的毫秒数
  // 3.2 expires：一个Date对象，指示cookie的到期时间（默认情况下在会话结束时到期）
  // 3.3 path ： 表示cookie路径的字符串（默认情况下/）
  // 3.4 domain: 表示cookie域的字符串（无默认值）
  // 3.5 secure： 一个boolean 值，指示cookies是否通过HTTPS发送（http默认是false，默认的情况下为https）
  // 3.5 httpOnly：一个boolean值，指示cookie是仅通过http(s)发送，还是不可用于客户端javascript（默认为true）
  // 3.6 sameSite： 一个boolean值或者一个字符串，指示cookie是否为“相同站点”cookie（默认为false）。这可以设置为‘strict’
  // ‘lax'或者true（映射到strict）。
  // 3.7 signed： 一个boolean值，指示是否要对cookie进行签名（默认为false）。 如果为这个是真的，则还将发送另一个附加的.sig后缀的
  // 同名cookie，其中一个27字节的url-safe base64 SHA1值表示针对第一个Keygrip键的cookie-name = cookie-value的哈希值。此签名密钥
  // 用于在下次收到cookie时检测篡改
  // 3.8  overwrite： 一个boolean值 指示是否覆盖以前设置的同名cookie（默认为false）。 如果是这样，则在设置此cookie是，将在
  // set-cookie标头中过滤掉在相同请求期间设置的具相同名称（无论路径或域）的所有cookie
  const SESSION = ctx.cookies.get('SESSION')
  if (!SESSION) {
    keylist = ["SEKRIT3", "SEKRIT2", "SEKRIT1"];
    keys = Keygrip(keylist);
    hash = keys.sign("bieberschnitzel");
    assert.ok(/^[\w\-]{27}$/.test(hash));
    // if (ctx.url == '/') {
    ctx.set("ETag", "123");
    ctx.cookies.set("SESSION", hash, {
      signed: true,
      domain: "localhost",
      // path: '/',
      maxAge: 1000 * 60 * 10,
      expires: new Date(),
      httpOnly: true,
      overwrite: false
      //secure:true
    });
    ctx.keys = keys;
    ctx.set({
      Etag: "1234",
      "Last-Modified": new Date()
    });
    if (ctx.fresh) {
      ctx.status = 304;
      return;
    } else {
      // await db.find('something')
    }
  }

  next();
};
module.exports = setCookies;
