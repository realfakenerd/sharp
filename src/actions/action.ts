import { errorSpinner, extractFileName, formatBytes, start, successSpinner } from '$utils';
import { bold, redBright } from 'colorette';
import sharp from 'sharp';
import { FormatOptions } from 'src/lib';

async function format({ input, output, format, options }: FormatOptions) {
	start();
	try {
		const fileFormat = format;
		const fileName = output ?? `./${extractFileName(input).filename}.${fileFormat}`;
		const _sharp = sharp(input);
		_sharp.toFormat(fileFormat, options);
		const formated = await _sharp.toFile(`./${fileName}`);
		successSpinner(`${bold(input)} changed to ${bold(fileName)} ${formatBytes(formated.size)}`);

		return formated;
	} catch (error) {
		errorSpinner(redBright(error as string));
	}
}

export default format;
