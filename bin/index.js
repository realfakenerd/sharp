#! /usr/bin/env node
import { bgGreen, bgGreenBright, bold, green } from "colorette";
import { program } from "commander";
import _sharp from "sharp";

// const sizes = [100, 200, 400, 800, 1080];

program
    .name(`${bgGreenBright(' ') + bgGreen(' ')}${bold(bgGreen("sharp "))}`)
    .description("CLI commands to sharpen you vision ;)")
    .version("0.0.1");

program
    .command(`resize`)
    .alias("resise")
    .description(green("Resize image to width, height or width x height"))
    .argument("source", green("Source file path"))
    .argument("[desination]", )
    .option('-w, --width <number>', 'New width', '1920')
    .option('-h, --height <number>', 'New height', '1080');

console.log(program.args);
program.parse();

// /** @type {import('sharp').Sharp} */
// let sharp;

// if (input.startsWith('http')) {
//     const res = await fetch(input);
//     const arrayBuffer = await res.arrayBuffer()
//     sharp = _sharp(arrayBuffer).toFormat('webp', { quality: 80 });
// } else {
//     sharp = _sharp(input).toFormat('webp', { quality: 80 });
// }

// await Promise.all(sizes.map(async (size) => {
//     try {
//         resizeImage(size)
//     } catch {/* empty */}
// }))

// /**
//  * The function `resizeImage` resizes an image to a specified height and saves it as a webp file.
//  * @param {number} size - The `size` parameter in the `resizeImage` function represents the desired height of
//  * the resized image.
//  */
// function resizeImage(size) {
//     // const sharp = _sharp(input).toFormat('webp');
//     const outputName = `./${output}_${size}.webp`
//     const resized = sharp.resize({ height: size });
//     resized.toFile(`${outputName}`);
//     console.log(`Resized image >> ${bold(green(outputName))}`);
// }
