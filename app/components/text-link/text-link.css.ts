import { style } from '@vanilla-extract/css'

import { vars } from '~/styles/theme.css'

export const link = style({
	position: 'relative',
	fontWeight: vars.typography.fontWeight.medium,
	color: vars.color['grey-800'],
	textDecorationColor: vars.color['grey-500'],
	textDecorationThickness: '0.1em',
	transition: '300ms ease',
	transitionProperty: 'background, text-decoration-color',

	':hover': {
		textDecorationColor: 'transparent',
		WebkitTextFillColor: 'transparent',
		background: 'var(--gradient)',
		backgroundClip: 'text',
	},

	'::before': {
		position: 'absolute',
		inset: '-0.125em',
		zIndex: -1,
		background: 'var(--gradient)',
		borderRadius: vars.radius.sm,
		// content: '',
		transition: 'scale 300ms ease',
		scale: '0 1',
		transformOrigin: 'bottom right',
	},

	selectors: {
		'&:hover::before': {
			scale: '1 1',
			transformOrigin: 'bottom left',
		},
	},
})
