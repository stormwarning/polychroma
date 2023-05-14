import { createTheme } from '@vanilla-extract/css'

export const fontSizes = {
	xs: '0.75rem',
	sm: '0.875rem',
	base: '1rem',
	'2xl': '1.5rem',
	'4xl': '2.25rem',
	'5xl': '3rem',
}
export const fontWeights = {
	normal: '400',
	medium: '500',
	semibold: '600',
	bold: '700',
}

export const greyPalette = {
	'grey-100': '#f1f2f2',
	'grey-200': '#e7ebed',
	'grey-300': '#dee4e8',
	'grey-400': '#c0c8cd',
	'grey-500': '#949ca1',
	'grey-600': '#62696d',
	'grey-700': '#393e41',
	'grey-800': '#202326',
	'grey-900': '#16191b',
}

export const [themeClass, vars] = createTheme({
	space: {
		0: '0',
		4: '4px',
		8: '8px',
		16: '16px',
		32: '32px',
		64: '64px',
		80: '80px',
	},
	color: {
		white: '#fff',
		black: '#000',

		...greyPalette,

		'cyan-100': '#d4fffd',
		'cyan-200': '#aafcff',
		'cyan-300': '#80f2ff',
		'cyan-400': '#60e4ff',
		'cyan-500': '#2cccff',
		'cyan-600': '#20a0db',
		'cyan-700': '#1679b7',
		'cyan-800': '#0e5693',
		'cyan-900': '#083e7a',
	},
	radius: {
		0: '0',
		sm: '2px',
		full: '9999px',
	},
	size: {
		0: '0',
		32: '32px',
		none: 'none',
		md: '448px',
		lg: '512px',
		full: '100%',
		'screen-w': '100vw',
		'screen-h': '100vh',
	},

	shadow: {
		panel: '0 2px 10px rgba(0, 0, 0, 0.12), 0 20px 50px 0 rgba(0, 0, 0, 0.14)',
	},

	typography: {
		fontSize: fontSizes,
		fontWeight: fontWeights,
		lineHeight: {
			none: '1',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
		},
		letterSpacing: {
			0: '0',
			widest: '0.1em',
		},
	},
})
