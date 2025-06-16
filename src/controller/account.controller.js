import AccountService from '../service/account.service.js';

class AccountController {
  async addAccount(ctx) {
    try {
      const { amount, category, type, date, description } = ctx.request.body;
      if (!date) {
        date = new Date();
      }
      const res = await AccountService.createAccount(ctx.request.body);
      ctx.body = {
        code: 0,
        message: '添加成功',
        data: { id: res.id },
      };
    } catch (error) {}
  }
}
export default new AccountController();
