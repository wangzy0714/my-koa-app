import fs from 'fs';
import Router from 'koa-router';
import path from 'path';
import { fileURLToPath } from 'url';

const router = new Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileList = fs.readdirSync(__dirname);

fileList.forEach(async (file) => {
  if (file.endsWith('.js') && file !== 'index.js') {
    const routerModule = await import(`./${file}`);
    router.use(routerModule.default.routes());
    router.use(routerModule.default.allowedMethods());
  }
});
export default router;
