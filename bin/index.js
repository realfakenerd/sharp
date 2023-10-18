#! /usr/bin/env node
import { bold, green } from 'colorette';
import { program } from 'commander';
import _sharp from 'sharp';

const sizes = [100, 200, 400, 800, 1080];

program.name('sharp').description('CLI commands to sharpen you vision ;)').version('0.0.1')

program.command('input')

program.parse();
const input = program.args[0];
const output = program.args[1];

console.log(program.args);
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