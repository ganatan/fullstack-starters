import request from 'supertest';
import app from '../src/app.js';

describe('GET /persons', () => {
  it('should return a list of persons with status 200', async () => {
    // Arrange
    const endpoint = '/persons';

    // Act
    const response = await request(app).get(endpoint);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
