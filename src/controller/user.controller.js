import userService from '../service/user.service.js';

class UserController {
  async register(ctx) {
    const { user_name, password } = ctx.request.body;
    if (!user_name || !password) {
      console.error('用户名或密码为空', ctx.request.body);
      ctx.status = 400;
      ctx.body = {
        code: 10001,
        msg: '用户名或密码为空',
        data: {},
      };
      return;
    }
    if (userService.getUserInfo({ user_name })) {
      ctx.status = 409;
      ctx.body = {
        code: 10002,
        msg: '用户名已存在',
        data: {},
      };
      return;
    }
    const res = await userService.createUser(user_name, password);
    const body = {
      code: 200,
      msg: '注册成功',
      data: { id: res.id, user_name: res.user_name },
    };
    ctx.body = body;
  }
  async login(ctx) {
    ctx.body = '登录成功';
  }
}
export default new UserController();
