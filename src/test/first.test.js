// const arr = ['apple', 'orange', 'banana'];
// expect(arr).toContain('banana');
// expect(new Set(arr)).toContain('banana');
// expect('apple, orange, banana').toContain('banana');

// const arr= []
// test('My first test', () => {
//     const res = 8;
//     const status = 200;
//     const message = 'privet'
//     expect(Math.max(1, 5, 10)).toBe(10);
// });

// function buildResponse(res, status, message) {
//     res.status(status).send(message);
//   }

// const app = require('../app');
// test('/ping', async () => {
//     await request(app)
//         .get('/ping')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .expect(({ body }) => {
//             expect(body).toEqual({ pong: true });
//         });
// });
const request = require('supertest');

var route = require('./app').route;

it('should return Hello Test', function (done) {
  request(route).get('/').expect('Hello Test').end(done);
});

it('should return NotFound with status 404', function (done) {
  request(route).get('/error').expect(404).expect('NotFound').end(done);
});

it('should return user with name Tom and age 22', function (done) {
  request(route)
    .get('/user')
    .expect(function (response) {
      assert.deepEqual(response.body, {
        name: 'Tom',
        age: 22,
      });
    })
    .end(done);
});
