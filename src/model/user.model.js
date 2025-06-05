import seq from '../db/seq.js';
import { DataTypes } from 'sequelize';
// 创建用户模型 zd_user --> zd_users(对应的表名)
const User = seq.define('zd_user', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false, // 不允许为空
    unique: true, // 唯一
    comment: '用户名，唯一',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码',
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员，0为普通用户，1为管理员',
  },
});
// 强制同步数据库(创建数据表)
// User.sync({ force: true });
export default User;
