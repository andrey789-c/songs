import { Sequelize } from 'sequelize';
import { env } from './IBot.interface.js';

export const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  dialect: 'postgres',
  host: 'localhost',
});
