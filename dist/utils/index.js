import { Argument } from "@commander-js/extra-typings";
import { green } from "colorette";
function createDescription(description) {
    return green(description);
}
function extractFileName(filePath) {
    const fileNameWithExtension = filePath.split("/").pop();
    return fileNameWithExtension?.split(".")[0];
}
const inputArg = new Argument("source", createDescription("Input file, can be path or an url")).argRequired();
const outputArg = new Argument("output", createDescription("Output file name, will be same as input file if no output given")).argOptional();
export { createDescription, inputArg, outputArg, extractFileName };
