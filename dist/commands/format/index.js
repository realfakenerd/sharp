import { createDescription, inputArg, outputArg } from "$utils";
import { Command, Option } from "@commander-js/extra-typings";
import format from "./action";
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
export default formatCommand;
