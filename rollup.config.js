import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from "svelte-preprocess";
import autoPreprocess from 'svelte-preprocess';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';


const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name }
	],
	plugins: [
		svelte({
            preprocess: autoPreprocess({
                postcss: true,
            }),
		resolve()
	],
	preprocess: sveltePreprocess({
		sourceMap: !production,
		postcss: {
			plugins: [
				require("tailwindcss"),
				require("autoprefixer"),
			],
		},
	}),
};
