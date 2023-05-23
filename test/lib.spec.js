const { describe, expect, test } = require('@jest/globals');
const subject = require('../lib/fetch');

describe('Testing the Fetch Library', () => {

	const libraryObj = subject.getInstance();

	it('getting two indexes', async () => {
		const response = await libraryObj.get(['AAPL', 'GOOGL']);
		expect(response).toEqual(expect.any(Array));
	});

	it('should return the same instance', async () => {
		const libraryObj2 = subject.getInstance();
		expect(libraryObj).toEqual(libraryObj2);
	});

	it('should have a cachedElements property and it should be an array', async () => {
		expect(libraryObj.getCachedElements('AAPL,GOOGL')).toEqual(expect.any(Array));
	});

	it('should have two elements in the cachedElements property', async () => {
		expect(libraryObj.getCachedElements('AAPL,GOOGL').length).toBe(2);
	});

	it('should be cached', async () => {
		const libraryObj2 = subject.getInstance();
		expect(libraryObj.getCachedElements('AAPL,GOOGL')).toEqual(libraryObj2.getCachedElements('AAPL,GOOGL'));
	});

	it('should fail if we have different count of indexes', async () => {
		const response = await libraryObj.get(['AAPL', 'GOOGL', 'EURUSD']);
		expect(libraryObj.getCachedElements('AAPL,GOOGL').length).toBe(2);
	});

});
