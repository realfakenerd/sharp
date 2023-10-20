import { extractFileName, spinner } from '$utils';
import { bold, green, redBright } from 'colorette';
import sharp from 'sharp';
import { ResizeOptions } from 'src/lib';

async function resize({ input, output, size }: ResizeOptions) {
	spinner.start();
	try {
		const _sharp = sharp(input);
		const { filename, extension } = extractFileName(input);
		const outputfileName = `${filename}_${size.height}.${extension}`;
		_sharp.resize(size);
		const resized = await _sharp.toFile(output ?? outputfileName);
		spinner.success({
			text: green(`${bold(outputfileName)} resized to ${resized.width}x${resized.height}`),
			mark: '✅'
		});
	} catch (error) {
		spinner.error({
			text: redBright(error as string),
			mark: '❌'
		});
	}
}

export default resize;
