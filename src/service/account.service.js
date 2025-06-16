import Account from '../model/accounts.model.js';
class AccountService {
  async createAccount(body) {
    const { amount, category, description, type, date } = body;
    console.log(amount, category, description, type, date);
    const res = await Account.create({
      amount,
      category,
      description,
      type,
      date,
    });
    return res.dataValues;
  }
}
export default new AccountService();
