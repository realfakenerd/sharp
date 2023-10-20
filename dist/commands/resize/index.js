import { createDescription, inputArg, outputArg } from '$utils';
import { Command, Option } from '@commander-js/extra-typings';
import resize from './action';
const width = new Option('-w, --width [size]', createDescription('How many pixels wide the resultant image should be.'));
const height = new Option('-h, --height [size]', createDescription('How many pixels high the resultant image should be.'));
const multi = new Option('-m, --multi [sizes]', createDescription('If present, output many sizes at once.'));
const resizeCommand = new Command('resize')
    .description(createDescription('Resize image to width, height or width x height.'))
    .addArgument(inputArg)
    .addArgument(outputArg)
    .addOption(width)
    .addOption(height)
    .addOption(multi)
    .action((input, output, { height, multi, width }) => {
    const size = {
        width: width ? parseInt(width) : undefined,
        height: height ? parseInt(height) : undefined
    };
    if (multi && typeof multi === 'string') {
        const sizes = multi.split(',');
        Promise.all(sizes.map((size) => {
            resize({ input, output, size: { height: parseInt(size) } });
        }));
        return;
    }
    return resize({ input, output, size });
});
export default resizeCommand;
