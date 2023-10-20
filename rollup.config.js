import alias from '@rollup/plugin-alias';

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'dist/index.js',
	plugins: [
		alias({
			entries: [{ find: '$utils', replacement: 'dist/utils/index.js' }]
		})
		// terser({
		//   compress: {
		//     ecma: 2020,
		//     passes: 3,
		//     module: true,
		//   },
		// }),
	],
	output: {
		inlineDynamicImports: true,
		file: 'bin/index.js',
		format: 'es'
	},
	external: ['colorette', 'nanospinner', 'figlet', 'sharp', '@commander-js/extra-typings'],
	cache: true
};
