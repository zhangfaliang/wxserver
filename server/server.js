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

// 应用的其余 require 需要被放到 hook 后面
const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(1);
  
  await next();
  console.log(2);
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(3);
  await next();
  console.log(4);
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);