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
const XResponseTime = require('../middleware/responseTime').default
const logger = require('../middleware/logger').default
console.log(XResponseTime,'55555');

const Koa = require('koa');
const app = new Koa();

app.use(XResponseTime);
app.use(logger);

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});


app.listen(5000);
