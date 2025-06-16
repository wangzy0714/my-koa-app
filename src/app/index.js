import Koa from 'koa';
import { koaBody } from 'koa-body';
import router from '../router/index.js';
import errHandler from './errHandler.js';

const app = new Koa();

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.on('error', (err, ctx) => {
  errHandler(err, ctx);
});
export default app;
