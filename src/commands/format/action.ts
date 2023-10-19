import { extractFileName } from "$utils";
import { bgGreen, bgGreenBright } from "colorette";
import sharp, {
  AvifOptions,
  FormatEnum,
  GifOptions,
  HeifOptions,
  Jp2Options,
  JpegOptions,
  JxlOptions,
  OutputOptions,
  PngOptions,
  TiffOptions,
  WebpOptions,
} from "sharp";

interface FormatOptions {
  input: string;
  output?: string;
  format?: keyof FormatEnum;
  options?:
    | OutputOptions
    | JpegOptions
    | PngOptions
    | WebpOptions
    | AvifOptions
    | HeifOptions
    | JxlOptions
    | GifOptions
    | Jp2Options
    | TiffOptions;
}
function format({ input, output, format, options }: FormatOptions) {
  const fileFormat = format ?? "webp";
  const fileName = output ?? `./${extractFileName(input)}.${fileFormat}`;
  const _sharp = sharp(input);
  _sharp.toFormat(fileFormat, options);
  _sharp.toFile(`./${fileName}.${fileFormat}`);
  console.log(`${bgGreen(' ')+bgGreenBright(' ')}\t${fileName} created`);
}

export default format;
