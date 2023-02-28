const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{tsx,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#10A37F',
				gray: {
					100: '#ECECF1',
					200: '#D9D9E3',
					300: '#C5C5D2',
					400: '#ACACBE',
					500: '#8E8EA0',
					600: '#565869',
					700: '#40414F',
					800: '#343541',
					900: '#202123',
				},
			},
			fontFamily: {
				sans: ['Söhne', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
