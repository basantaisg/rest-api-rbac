# 🚀 Quick Start Guide

## 1. Database Setup
Make sure you have PostgreSQL running and create a database:
```sql
CREATE DATABASE usercrud;
```

## 2. Environment Variables
Create a `.env` file in your project root with:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_postgres_username
DATABASE_PASSWORD=your_postgres_password
DATABASE_NAME=usercrud
JWT_SECRET=your-super-secret-key-here
PORT=3000
NODE_ENV=development
```

## 3. Start the Application
```bash
npm run start:dev
```

## 4. Test the API
In a new terminal, run:
```bash
node test-api.js
```

## 🎯 What You Get

✅ **Complete User CRUD API**
- Create, read, update, delete users
- User profile management
- Role-based access control

✅ **JWT Authentication**
- Secure login/register
- Protected routes
- Token-based sessions

✅ **Security Features**
- Password hashing with bcrypt
- Input validation
- CORS protection
- Role-based permissions

## 📍 API Endpoints

- `POST /auth/register` - Create account
- `POST /auth/login` - Login
- `GET /users/profile` - Your profile (authenticated)
- `PATCH /users/profile` - Update profile (authenticated)
- `GET /users` - All users (admin only)
- `GET /users/:id` - User by ID (admin only)
- `PATCH /users/:id` - Update user (admin only)
- `DELETE /users/:id` - Delete user (admin only)

## 🔐 Default Roles
- **User**: Can manage own profile
- **Admin**: Can manage all users

## 🚨 Important Notes
- Change JWT_SECRET in production
- Set NODE_ENV=production for production
- Disable synchronize: true in production
- Use proper database migrations in production

## 🆘 Troubleshooting
If you get database connection errors:
1. Check PostgreSQL is running
2. Verify database credentials
3. Ensure database 'usercrud' exists
4. Check firewall/network settings
