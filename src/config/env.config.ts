export const envConfig = {
  // Database Configuration
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_PORT: 5432,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'B2k25ismine@1$',
  DATABASE_NAME: process.env.DATABASE_NAME || 'usercrud',

  // JWT Configuration
  JWT_SECRET:
    process.env.JWT_SECRET ||
    'your-super-secret-jwt-key-change-this-in-production',

  // Application Configuration
  PORT: 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
};
