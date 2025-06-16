const errHandler = (ctx, next) => {
  let status = 500;
  switch (err) {
    case '10001':
      status = 400;
      break;
    case '10002':
      status = 409;
      break;
    default:
      status = 500;
      break;
  }
  ctx.status = status;
  ctx.body = err;
  console.error('err', err);
};
export default errHandler;
