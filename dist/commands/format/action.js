import { extractFileName } from "$utils";
import { bgGreen, bgGreenBright } from "colorette";
import sharp from "sharp";
function format({ input, output, format, options }) {
    const fileFormat = format ?? "webp";
    const fileName = output ?? `./${extractFileName(input)}.${fileFormat}`;
    const _sharp = sharp(input);
    _sharp.toFormat(fileFormat, options);
    _sharp.toFile(`./${fileName}.${fileFormat}`);
    console.log(`${bgGreen(' ') + bgGreenBright(' ')}\t${fileName} created`);
}
export default format;
