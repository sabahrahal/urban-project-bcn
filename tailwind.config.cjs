/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Oswald", ...defaultTheme.fontFamily.sans],
			  },
			maxWidth: {
				'sm-custom': '540px',
				'md-custom': '720px', 
				'lg-custom': '960px', 
				'xl-custom': '1140px',
				'2xl-custom': '1320',
			  },
		},
		container: {
			center: true,
		}
	},
	plugins: [],
}
