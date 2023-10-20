import { errorSpinner, extractFileName, start, successSpinner } from '$utils';
import { bold, green, redBright } from 'colorette';
import sharp from 'sharp';
async function resize({ input, output, size }) {
    start();
    try {
        const _sharp = sharp(input);
        const { filename, extension } = extractFileName(input);
        const outputfileName = `${filename}_${size.height}.${extension}`;
        _sharp.resize(size);
        const resized = await _sharp.toFile(output ?? outputfileName);
        successSpinner(green(`${bold(outputfileName)} resized to ${resized.width}x${resized.height}`));
    }
    catch (error) {
        errorSpinner(redBright(error));
    }
}
export default resize;
