const page = Router => {
  const pageRouter = new Router();
  pageRouter
    .get("/404", async ctx => {
      ctx.body = "404 page";
    })
    .get("/helloworld", async ctx => {
      ctx.body = "hellow word page";
    });
  return pageRouter;
};
module.exports = page;