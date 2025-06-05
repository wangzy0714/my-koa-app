import Router from 'koa-router';
import userController from '../controller/user.controller.js';
import { userValidator, verifyUser } from '../middleware/user.middleware.js';

const userRouter = new Router({ prefix: '/user' });

//GET /user/
userRouter.get('/', async (ctx, next) => {
  ctx.body = 'hello user';
});

// 使用导入的控制器
userRouter.post(
  '/register',
  userValidator,
  verifyUser,
  userController.register
);
userRouter.post('/login', userController.login);
export default userRouter;
