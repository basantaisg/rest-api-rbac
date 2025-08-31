# User CRUD API with JWT Authentication

This is a NestJS application that provides a complete REST API for user management with JWT authentication.

## Features

- **User Management**: Create, read, update, and delete users
- **JWT Authentication**: Secure login and registration system
- **Role-based Access Control**: Admin and user roles
- **Password Hashing**: Secure password storage using bcrypt
- **Input Validation**: Request validation using class-validator
- **TypeORM Integration**: Database operations with PostgreSQL

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up your environment variables by creating a `.env` file in the root directory:
```env
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=usercrud

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Application Configuration
PORT=3000
NODE_ENV=development
```

3. Create a PostgreSQL database named `usercrud`

4. Run the application:
```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Users (Protected Routes)
- `GET /users` - Get all users (Admin only)
- `GET /users/:id` - Get user by ID (Admin only)
- `PATCH /users/:id` - Update user (Admin only)
- `DELETE /users/:id` - Delete user (Admin only)

### User Profile (Authenticated Users)
- `GET /users/profile` - Get current user profile
- `PATCH /users/profile` - Update current user profile

## Request Examples

### Register a new user
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Access protected route
```bash
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Database Schema

The application automatically creates the following table:

### Users Table
- `id` (UUID, Primary Key)
- `email` (VARCHAR, Unique)
- `password` (VARCHAR, Hashed)
- `firstName` (VARCHAR)
- `lastName` (VARCHAR)
- `role` (ENUM: 'user', 'admin')
- `isActive` (BOOLEAN)
- `createdAt` (TIMESTAMP)
- `updatedAt` (TIMESTAMP)

## Security Features

- **JWT Tokens**: Secure authentication with configurable expiration
- **Password Hashing**: Bcrypt with salt rounds
- **Input Validation**: Request data validation and sanitization
- **Role-based Access**: Different permissions for different user roles
- **CORS Protection**: Configurable cross-origin resource sharing

## Development

- **Hot Reload**: Use `npm run start:dev` for development
- **Linting**: `npm run lint` to check code quality
- **Testing**: `npm run test` to run unit tests
- **E2E Testing**: `npm run test:e2e` for end-to-end tests

## Production Considerations

1. Change the JWT secret to a strong, unique value
2. Set `NODE_ENV=production`
3. Disable `synchronize: true` in TypeORM configuration
4. Use environment variables for all sensitive configuration
5. Set up proper database migrations
6. Configure CORS appropriately for your domain
7. Set up proper logging and monitoring
