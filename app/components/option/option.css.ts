import { style } from '@vanilla-extract/css'

import { vars } from '~/styles/theme.css'

export const details = style({
	transition: 'box-shadow 200ms ease-in-out',

	selectors: {
		'&[open]': {
			boxShadow:
				'rgba(0, 0, 0, 0.12) 0 2px 10px, 0 20px 50px 0 rgba(0, 0, 0, 0.14)',
		},
	},
})

export const summary = style({
	listStyleType: 'none',
	userSelect: 'none',
	cursor: 'pointer',
	outline: 'none',

	selectors: {
		'&::-webkit-details-marker': {
			display: 'none',
		},

		[`&:not(${details}[open] &):hover`]: {
			backgroundColor: vars.color['grey-200'],
		},
		[`&:not(${details}[open] &):focus-visible`]: {
			backgroundColor: vars.color['grey-200'],
		},
	},
})
