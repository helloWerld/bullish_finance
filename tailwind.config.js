/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Anek Devanagari'],
			},
			backgroundImage: {
				'tg-pattern': "url('/assets/pattern.svg')",
			},
			textShadow: {
				custom: '0px 0px 4px rgba(255, 255, 255, 2.5)',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
};
