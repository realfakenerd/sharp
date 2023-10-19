import { Argument, Option, Command, program } from '@commander-js/extra-typings';
import { green, bgGreen, bgGreenBright } from 'colorette';
import figlet from 'figlet';
import sharp from 'sharp';

function createDescription(description) {
    return green(description);
}
function extractFileName(filePath) {
    const fileNameWithExtension = filePath.split("/").pop();
    return fileNameWithExtension?.split(".")[0];
}
const inputArg = new Argument("source", createDescription("Input file, can be path or an url")).argRequired();
const outputArg = new Argument("output", createDescription("Output file name, will be same as input file if no output given")).argOptional();

function format({ input, output, format, options }) {
    const fileFormat = format ?? "webp";
    const fileName = output ?? `./${extractFileName(input)}.${fileFormat}`;
    const _sharp = sharp(input);
    _sharp.toFormat(fileFormat, options);
    _sharp.toFile(`./${fileName}.${fileFormat}`);
    console.log(`${bgGreen(' ') + bgGreenBright(' ')}\t${fileName} created`);
}

const formatOption = new Option("-f, --format <type>", createDescription("Format to be used on output"));
const formatCommand = new Command("format")
    .description(createDescription("Force output to a given format."))
    .addArgument(inputArg)
    .addArgument(outputArg)
    .addOption(formatOption)
    .action((input, output, options) => {
    format({
        input,
        output,
        options: options,
    });
});

const resizeOption = new Option("-f, --format <type>", createDescription("Format to be used on output"));
const resizeCommand = new Command("resize")
    .description(createDescription("Force output to a given format."))
    .addArgument(inputArg)
    .addArgument(outputArg)
    .addOption(resizeOption)
    .action((input, output, options) => {
    console.log(input);
    console.log(output);
    console.log(options);
});

console.log(`\n${green(figlet.textSync("Sharpen", { font: "3D-ASCII" }))}\n`);
program
    .name(`sharpen`)
    .description("CLI commands to sharpen you vision ;)")
    .version("0.0.1");
program.addCommand(formatCommand).addCommand(resizeCommand);
program.parse();
