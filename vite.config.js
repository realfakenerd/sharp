import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		alias: [
			{
				find: '$utils',
				replacement: 'src/utils/index.ts'
			}
		],
		threads: false
	}
});
