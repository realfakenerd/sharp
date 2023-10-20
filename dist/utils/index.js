import { Argument } from '@commander-js/extra-typings';
import { green } from 'colorette';
function createDescription(description) {
    return green(description);
}
function extractFileName(filePath) {
    const fileNameWithExtension = filePath.split('/').pop();
    return {
        filename: fileNameWithExtension?.split('.')[0],
        extension: fileNameWithExtension?.split('.')[1]
    };
}
function formatBytes(bytes, decimals = 2) {
    if (isNaN(bytes) || !Number.isFinite(bytes))
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let i = 0;
    while (bytes >= k && i < sizes.length - 1) {
        bytes /= k;
        i++;
    }
    const formattedBytes = bytes.toFixed(dm);
    return `${parseFloat(formattedBytes)} ${sizes[i]}`;
}
const inputArg = new Argument('source', createDescription('Input file, can be path or an url')).argRequired();
const outputArg = new Argument('output', createDescription('Output file name, will be same as input file if no output given')).argOptional();
export * from './spinner';
export { createDescription, extractFileName, formatBytes, inputArg, outputArg };
