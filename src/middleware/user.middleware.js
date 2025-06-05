import userService from '../service/user.service.js';
import errType from '../constant/err.type.js';
import bcrypt from 'bcryptjs';
//中间件
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  if (!user_name || !password) {
    ctx.app.emit('error', errType.userFormatError, ctx);
    return;
  }
  await next();
};
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;
  try {
    const res = await userService.getUserInfo({ user_name });
    if (res) {
      ctx.app.emit('error', errType.userAlreadyExist, ctx);
      return;
    }
  } catch (e) {
    ctx.app.emit('error', errType.registerFail, ctx);
    return;
  }
  await next();
};
// 密码加密
const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;
  await next();
};
export { userValidator, verifyUser };
