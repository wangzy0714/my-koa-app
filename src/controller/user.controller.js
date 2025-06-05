import userService from '../service/user.service.js';
import errType from '../constant/err.type.js';
class UserController {
  async register(ctx) {
    try {
      const { user_name, password } = ctx.request.body;
      const res = await userService.createUser(user_name, password);
      ctx.body = {
        code: 200,
        msg: '注册成功',
        data: { id: res.id, user_name: res.user_name },
      };
    } catch (e) {
      ctx.app.emit('error', errType.registerFail, ctx);
      return;
    }
  }
  async login(ctx) {
    ctx.body = '登录成功';
  }
}
export default new UserController();
