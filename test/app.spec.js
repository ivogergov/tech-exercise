const { describe, expect, test } = require('@jest/globals');
const request = require('supertest');
const subject = require('../app');

describe('Testing the server', () => {

	it('can run the express server and return a 200', async () => {
		const response = await request(subject).get('/');
		expect(response.statusCode).toBe(200);
	});

	it('can run the express server and get the /AAPL route', async () => {
		const response = await request(subject).get('/AAPL');
		expect(response.statusCode).toBe(200);
	});

});
