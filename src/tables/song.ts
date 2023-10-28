import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../bd.js';

const Song = sequelize.define('song', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
  },
});
