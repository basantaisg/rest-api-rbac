const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function testAPI() {
  try {
    console.log('🚀 Testing User CRUD API with JWT Authentication\n');

    // Test 1: Register a new user
    console.log('1. Testing user registration...');
    const registerResponse = await axios.post(`${BASE_URL}/auth/register`, {
      email: 'test@example.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User',
    });
    console.log(
      '✅ User registered successfully:',
      registerResponse.data.email,
    );

    // Test 2: Login
    console.log('\n2. Testing user login...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'test@example.com',
      password: 'password123',
    });
    const token = loginResponse.data.access_token;
    console.log('✅ Login successful, JWT token received');

    // Test 3: Get user profile
    console.log('\n3. Testing protected route (profile)...');
    const profileResponse = await axios.get(`${BASE_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(
      '✅ Profile accessed successfully:',
      profileResponse.data.email,
    );

    // Test 4: Update user profile
    console.log('\n4. Testing profile update...');
    const updateResponse = await axios.patch(
      `${BASE_URL}/users/profile`,
      {
        firstName: 'Updated',
        lastName: 'Name',
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    console.log(
      '✅ Profile updated successfully:',
      updateResponse.data.firstName,
    );

    // Test 5: Register admin user
    console.log('\n5. Testing admin user registration...');
    const adminResponse = await axios.post(`${BASE_URL}/auth/register`, {
      email: 'admin@example.com',
      password: 'admin123',
      firstName: 'Admin',
      lastName: 'User',
      role: 'admin',
    });
    console.log('✅ Admin user registered successfully');

    // Test 6: Admin login
    console.log('\n6. Testing admin login...');
    const adminLoginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'admin@example.com',
      password: 'admin123',
    });
    const adminToken = adminLoginResponse.data.access_token;
    console.log('✅ Admin login successful');

    // Test 7: Admin access to all users
    console.log('\n7. Testing admin access to all users...');
    const allUsersResponse = await axios.get(`${BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    console.log(
      `✅ Admin can access all users. Total users: ${allUsersResponse.data.length}`,
    );

    console.log('\n🎉 All tests passed successfully!');
    console.log('\n📋 Summary:');
    console.log('- User registration: ✅');
    console.log('- User login: ✅');
    console.log('- JWT authentication: ✅');
    console.log('- Protected routes: ✅');
    console.log('- Profile management: ✅');
    console.log('- Role-based access: ✅');
    console.log('- Admin privileges: ✅');
  } catch (error) {
    console.error('\n❌ Test failed:', error.response?.data || error.message);
    console.log('\n💡 Make sure:');
    console.log('1. The server is running on http://localhost:3000');
    console.log('2. PostgreSQL database is connected');
    console.log('3. All environment variables are set correctly');
  }
}

// Run the test
testAPI();
