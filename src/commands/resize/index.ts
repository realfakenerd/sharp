import { createDescription, inputArg, outputArg } from "$utils";
import { Command, Option } from "@commander-js/extra-typings";
const resizeOption = new Option(
  "-f, --format <type>",
  createDescription("Format to be used on output")
);

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

export default resizeCommand;
