import path from 'path';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		path.join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};
