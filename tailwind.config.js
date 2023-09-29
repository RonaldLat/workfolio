/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      colors:{
        'myColor': {
           '50': '#f1fafe',
    '100': '#e3f2fb',
    '200': '#c0e6f7',
    '300': '#89d3f0',
    '400': '#4abce6',
    '500': '#22a4d5',
    '600': '#1484b5',
    '700': '#116a93',
    '800': '#125776',
    '900': '#154b65',
    '950': '#0e3043',
},

      },
  fontFamily: {
      black: ["Black Ops One" ]
    }
    },
	},
	plugins: [require('@tailwindcss/typography')]
};
