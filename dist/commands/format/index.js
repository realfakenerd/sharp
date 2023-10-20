import { createDescription, inputArg, outputArg } from '$utils';
import { Command, Option } from '@commander-js/extra-typings';
import format from './action';
const formatOption = new Option('-f, --format <type>', createDescription('Format to be used on output')).makeOptionMandatory();
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
export default formatCommand;
