import { green, redBright } from 'colorette';
import { createSpinner } from 'nanospinner';

const { error, success, start } = createSpinner('running...', {
	color: 'green',
	interval: 100,
	stream: process.stdout
});

const successSpinner = (text: string) => success({ text: green(text), mark: '✅' });
const errorSpinner = (text: string) => error({ text: redBright(text), mark: '❌' });

export { successSpinner, errorSpinner, start };
