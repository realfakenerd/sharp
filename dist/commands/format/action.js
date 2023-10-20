import { errorSpinner, extractFileName, formatBytes, start, successSpinner } from '$utils';
import { bold, redBright } from 'colorette';
import sharp from 'sharp';
async function format({ input, output, format, options }) {
    start();
    try {
        const fileFormat = format;
        const fileName = output ?? `./${extractFileName(input).filename}.${fileFormat}`;
        const _sharp = sharp(input);
        _sharp.toFormat(fileFormat, options);
        const formated = await _sharp.toFile(`./${fileName}`);
        successSpinner(`${bold(input)} changed to ${bold(fileName)} ${formatBytes(formated.size)}`);
    }
    catch (error) {
        errorSpinner(redBright(error));
    }
}
export default format;
