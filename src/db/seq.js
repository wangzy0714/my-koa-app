import { Sequelize } from 'sequelize';
const { MYSQL_DB, MYSQL_USER, MYSQL_PWD, MYSQL_HOST, MYSQL_PORT } = process.env;
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: 'mysql',
  logging: false,
});

export default seq;
