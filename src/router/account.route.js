import Router from 'koa-router';
import AccountController from '../controller/account.controller.js';
const router = new Router({ prefix: '/api' });
router.post('/accounts', AccountController.addAccount);
export default router;
