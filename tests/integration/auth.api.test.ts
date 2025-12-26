import request from 'supertest';
import { app, startServer, closeServer } from '../../src/Server';

describe('Auth API', () => {
  beforeAll(async () => {
    // Connect to a test database and start the server
    const url = 'mongodb://localhost:27017/gyan-setu-test';
    await startServer(url);
  });

  afterAll(async () => {
    // Disconnect from the database and close the server
    await closeServer();
  });

  describe('POST /api/v1/auth/register', () => {
    it('should register a new user and return 201', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          name: 'Test User',
          email: 'testuser@example.com',
          password: 'password123',
          schoolCode: 'TEST123'
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body.data).toHaveProperty('message', 'User registered successfully');
    });

    // Add more tests for registration (e.g., duplicate email, invalid school code)
  });
});

