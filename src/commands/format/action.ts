import { extractFileName, formatBytes, spinner } from '$utils';
import { bold, redBright } from 'colorette';
import sharp from 'sharp';
import { FormatOptions } from 'src/lib';

async function format({ input, output, format, options }: FormatOptions) {
	spinner.start();
	try {
		const fileFormat = format;
		const fileName = output ?? `./${extractFileName(input).filename}.${fileFormat}`;
		const _sharp = sharp(input);
		_sharp.toFormat(fileFormat, options);
		const formated = await _sharp.toFile(`./${fileName}`);

		spinner.success({
			text: `${bold(input)} changed to ${bold(fileName)} ${formatBytes(formated.size)}`,
			mark: '✅'
		});
	} catch (error) {
		spinner.error({
			text: redBright(error as string),
			mark: '❌'
		});
	}
}

export default format;
