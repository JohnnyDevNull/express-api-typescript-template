import * as request from 'supertest';
import app from '../../src/app';

describe('index route', () => {

  // beforeEach(() => {
  //   console.log('beforeEach triggered');
  // });

  // afterEach(() => {
  //   console.log('afterEach triggered');
  // });

  // beforeAll(() => {
  //   console.log('beforeAll triggered');
  // });

  // afterAll(() => {
  //   console.log('afterAll triggered');
  // });

  test('app to be defined', () => {
    expect(app).toBeDefined();
  });

  test('test response statusCode', () => {
    expect.assertions(1);
    return request(app).get('/').then(response => {
      expect((<any>response).statusCode).toBe(200);
    });
  });

  test('test response body', async () => {
    expect.assertions(1);
    const response = await request(app).get('/');
    expect((<any>response).body).toEqual({meta: {code: 0, message: 'The api is online!'}});
  });
});
