import Router from 'koa-router';
import userController from '../controller/user.controller.js';

const userRouter = new Router({ prefix: '/user' });

//GET /user/
userRouter.get('/', async (ctx, next) => {
  ctx.body = 'hello user';
});

// 使用导入的控制器
userRouter.get('/register', userController.register);
userRouter.post('/login', userController.login);
export default userRouter;
