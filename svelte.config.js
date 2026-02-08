import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const prod = process.env.NODE_ENV === 'production'
const getBasePath = () => {
	return prod ? "" : '/bbtb-website';
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: { 
		adapter: adapter({
			pages: 'docs', // Output directory for GH Pages
      		fallback: 'index.html' // Serves index.html for unprerendered routes
		}), 
		paths: {
			base: getBasePath(),
			relative: false
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
