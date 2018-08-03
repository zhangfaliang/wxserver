export default async(ctx, next) => { 
    //console.log(ctx.request);
  //console.log(ctx.response);
  //console.log(ctx.state);
  console.log(ctx.app);
  

  next()
}