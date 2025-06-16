import { DataTypes } from 'sequelize';
import seq from '../db/seq.js';

const Account = seq.define(
  'node_account',
  {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: '金额',
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '分类',
    },
    description: {
      type: DataTypes.STRING,
      comment: '描述',
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '类型：收入/支出',
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '日期',
    },
  },
  {
    timestamps: true, // 默认就是 true，自动加 createdAt 和 updatedAt
  }
);
// Account.sync({ force: true });
export default Account;
