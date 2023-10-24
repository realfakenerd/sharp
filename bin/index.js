import { Argument, Option, Command, program } from '@commander-js/extra-typings';
import { green, redBright, bold } from 'colorette';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import sharp from 'sharp';

const { error, success, start } = createSpinner('running...', {
	color: 'green',
	interval: 100,
	stream: process.stdout
});
const successSpinner = (text) => success({ text: green(text), mark: '✅' });
const errorSpinner = (text) => error({ text: redBright(text), mark: '❌' });

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
	if (isNaN(bytes) || !Number.isFinite(bytes)) return '0 Bytes';
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
const inputArg = new Argument(
	'source',
	createDescription('Input file, can be path or an url')
).argRequired();
const outputArg = new Argument(
	'output',
	createDescription('Output file name, will be same as input file if no output given')
).argOptional();

async function format({ input, output, format, options }) {
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
		errorSpinner(redBright(error));
	}
}

const formatOption = new Option(
	'-f, --format <type>',
	createDescription('Format to be used on output')
).makeOptionMandatory();
const formatCommand = new Command('format')
	.description(createDescription('Force output to a given format.'))
	.addArgument(inputArg)
	.addArgument(outputArg)
	.addOption(formatOption)
	.action(async (input, output, options) => {
		await format({
			input,
			output,
			format: options.format
		});
	});

async function resize({ input, output, size }) {
	start();
	try {
		const _sharp = sharp(input);
		const { filename, extension } = extractFileName(input);
		const outputfileName = `${filename}_${size.height}.${extension}`;
		_sharp.resize(size);
		const resized = await _sharp.toFile(output ?? outputfileName);
		successSpinner(green(`${bold(outputfileName)} resized to ${resized.width}x${resized.height}`));
		return resized;
	} catch (error) {
		errorSpinner(redBright(error));
	}
}

const width = new Option(
	'-w, --width [size]',
	createDescription('How many pixels wide the resultant image should be.')
);
const height = new Option(
	'-h, --height [size]',
	createDescription('How many pixels high the resultant image should be.')
);
const multi = new Option(
	'-m, --multi [sizes]',
	createDescription('If present, output many sizes at once.')
);
const resizeCommand = new Command('resize')
	.description(createDescription('Resize image to width, height or width x height.'))
	.addArgument(inputArg)
	.addArgument(outputArg)
	.addOption(width)
	.addOption(height)
	.addOption(multi)
	.action(async (input, output, { height, multi, width }) => {
		const size = {
			width: width ? parseInt(width) : undefined,
			height: height ? parseInt(height) : undefined
		};
		if (multi && typeof multi === 'string') {
			const sizes = multi.split(',');
			Promise.all(
				sizes.map(async (size) => {
					await resize({ input, output, size: { height: parseInt(size) } });
				})
			);
			return;
		}
		await resize({ input, output, size });
	});

(async () => {
	console.log(`\n${green(figlet.textSync('Sharpen', { font: '3D-ASCII' }))}\n`);
	program.name('sharpen').description('CLI commands to sharpen you vision ;)').version('0.0.1');
	program.addCommand(formatCommand).addCommand(resizeCommand);
	await program.parseAsync();
})();
