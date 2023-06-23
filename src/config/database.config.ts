import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'srv515.hstgr.io',
  port: 3306 || 3000,
  username: 'u302833260_nico2',
  password: '3Bo#hf~6Ww',
  database: 'u302833260_parking',
  entities: ["dist/**/*.entity.js"],
  synchronize: false
};