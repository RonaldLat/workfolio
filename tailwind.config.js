/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				myColorBak: {
					50: '#f1fafe',
					100: '#e3f2fb',
					200: '#c0e6f7',
					300: '#89d3f0',
					400: '#4abce6',
					500: '#22a4d5',
					600: '#1484b5',
					700: '#116a93',
					800: '#125776',
					900: '#154b65',
					950: '#0e3043'
				},
				myColo: {
              '50': '#f0f9ff',
    '100': '#e0f2fe',
    '200': '#bae6fd',
    '300': '#7dd2fc',
    '400': '#52c5f9',
    '500': '#0ea4e9',
    '600': '#0283c7',
    '700': '#0368a1',
    '800': '#075885',
    '900': '#0c4a6e',
    '950': '#082f49',
				},
        myColor: {
              '50': '#f0f6fe',
    '100': '#dcebfd',
    '200': '#c1dcfc',
    '300': '#9fccfa',
    '400': '#65a9f5',
    '500': '#4187f0',
    '600': '#2b69e5',
    '700': '#2355d2',
    '800': '#2346aa',
    '900': '#223e86',
    '950': '#192752',
},



			},
			fontFamily: {
				black: ['Black Ops One']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
