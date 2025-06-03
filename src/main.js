import Koa from 'koa';
import './config/config.default.js';
const port = process.env.APP_PORT;
console.log('🚀 ~ port:', port);

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello, world!';
  await next();
});

app.listen(3000, () => {
  console.log(`🚀 ~ Server is running on http://localhost:${port}`);
});
