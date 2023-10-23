import { describe, it, expect, assertType } from 'vitest';
import resize from './action';
import { resolve } from 'path';
import { OutputInfo } from 'sharp';

describe('Image Resizing', function () {
	const input = './input.avif';

	it('should resize an image', async function () {
		const output = './output_resized.jpg';
		const size = { width: 800, height: 600 }; // Modify based on your test case

		console.log(resolve(input));

		const result = await resize({ input, output, size });

		expect(result).to.be.an('object');
		assertType<OutputInfo | undefined>(result);
		expect(result).to.have.property('width').and.to.be.eq(800);
		expect(result).to.have.property('height').and.to.be.eq(600);
	});

	it('Should maintain aspect ratio', async () => {
		const output = './output_resized_no_w.jpg';

		const result = await resize({ input, size: { height: 720 }, output });
		expect(result).to.have.property('width').and.to.be.above(720);
		expect(result).to.have.property('height').and.to.be.eq(720);
	});

	it('should handle errors when resizing an image', async function () {
		const input = './noexistentresize.jpg';
		const output = 'output.jpg';
		const size = { width: 800, height: 600 }; // Modify based on your test case

		const result = await resize({ input, output, size });
		expect(result).toBeUndefined();
	});
});
