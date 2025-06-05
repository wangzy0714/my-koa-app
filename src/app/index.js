import Koa from 'koa';
import router from '../router/index.js';
import { koaBody } from 'koa-body';
import errhandler from './errhandler.js';

const app = new Koa();
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());
// 错误处理
app.on('error', (err, ctx) => {
  errhandler(err, ctx);
});
export default app;
