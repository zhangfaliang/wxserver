const jsonp = Router => {
  const jsonpRoute = new Router();
  jsonpRoute.get("/", async ctx => {
    const callbackName = ctx.query.callback || "callback";
    if (callbackName == "callbackData") {
      let returnData = {
        success: true,
        data: {
          text: "this is a jsonp api",
          time: new Date().getTime()
        }
      };
      let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`;
      ctx.type = "text/javascrit";
      ctx.body = returnData;
    } else {
      ctx.body = "404";
    }
  });
  return jsonpRoute;
};

module.exports = jsonp;
