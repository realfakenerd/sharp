import { expect, describe, it, assertType } from 'vitest';
import format from './action';
import { OutputInfo } from 'sharp';
describe('Image Formatting', function () {
	it('should format an image', async function () {
		const input = './input.avif';
		const output = './output.jpg';
		const extension = 'jpeg';
		const options = {};
		const result = await format({ input, output, format: extension, options });

		expect(result).to.be.an('object');
		assertType<OutputInfo | undefined>(result);
		// expect(result).to.have.property('filename');
		// expect(result).to.have.property('size');
		// Add more expections based on your specific requirements
	});

	it('should handle errors when formatting an image', async function () {
		const input = './nonexistentformat.jpg';
		const output = 'output.jpg';
		const extension = 'jpeg';
		const options = {}; // Add your format options if necessary

		const result = await format({ input, output, format: extension, options });
		expect(result).toBeUndefined();
	});
});
