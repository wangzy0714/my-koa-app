import Koa from 'koa';
import router from '../router/index.js';
import { koaBody } from 'koa-body';

const app = new Koa();
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());
export default app;
