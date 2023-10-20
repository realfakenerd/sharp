import { program } from '@commander-js/extra-typings';
import { green } from 'colorette';
import figlet from 'figlet';
import { formatCommand, resizeCommand } from './commands/index.js';
(async () => {
    console.log(`\n${green(figlet.textSync('Sharpen', { font: '3D-ASCII' }))}\n`);
    program.name('sharpen').description('CLI commands to sharpen you vision ;)').version('0.0.1');
    program.addCommand(formatCommand).addCommand(resizeCommand);
    await program.parseAsync();
})();
