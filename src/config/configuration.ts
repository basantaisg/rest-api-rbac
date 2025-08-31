import { envConfig } from './env.config';

export default () => ({
  port: envConfig.PORT,
  database: {
    host: envConfig.DATABASE_HOST,
    port: envConfig.DATABASE_PORT,
    username: envConfig.DATABASE_USERNAME,
    password: envConfig.DATABASE_PASSWORD,
    database: envConfig.DATABASE_NAME,
  },
  jwt: {
    secret: envConfig.JWT_SECRET,
    expiresIn: '24h',
  },
});
