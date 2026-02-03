const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

describe('Auth API', () => {
  const user = {
    email: `test${Date.now()}@mail.com`,
    password: '123456'
  };

  test('Registro de usuario', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(user);

    expect(res.statusCode).toBeLessThan(500);
  });

  test('Login de usuario', async () => {
    await request(app).post('/api/auth/register').send(user);

    const res = await request(app)
      .post('/api/auth/login')
      .send(user);

    expect(res.body.token).toBeDefined();
  });

  // 🔹 Cerrar conexión al terminar pruebas
  afterAll(async () => {
    await mongoose.connection.close();
  });
});
