import Koa from 'koa';
import router from '../router/index.js';
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello, world!';
  await next();
});
app.use(router.routes()).use(router.allowedMethods());
export default app;
