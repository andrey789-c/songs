import 'dotenv/config';

interface EnvironmentVariables {
  TOKEN: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
}

export const env: EnvironmentVariables = {
  TOKEN: process.env.TOKEN || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || '',
  DB_USER: process.env.DB_USER || '',
};
