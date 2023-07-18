/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				tall: { raw: '(min-height: 800px)' },
				short: { raw: '(max-height: 600px)' },
			},
		},
	},
	plugins: [],
}
