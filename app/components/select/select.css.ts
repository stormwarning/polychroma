import { style } from '@vanilla-extract/css'

import { vars } from '../../../styles/theme.css'

export const trigger = style({
	all: 'unset',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: vars.space[8],
	height: 35,
	width: '50%',
	paddingInlineStart: vars.space[16],
	paddingInlineEnd: vars.space[8],
	fontSize: vars.typography.fontSize.sm,
	fontWeight: vars.typography.fontWeight.medium,
	lineHeight: 1,
	color: vars.color['grey-800'],
	backgroundColor: vars.color['grey-100'],
	borderRadius: vars.radius.sm,
	// boxShadow: `0 2px 10px ${blackA.blackA7}`,

	':hover': { backgroundColor: vars.color['grey-200'] },
	':focus-visible': { boxShadow: `0 0 0 2px black` },
	selectors: {
		'&[data-placeholder]': { color: vars.color['grey-600'] },
	},
})

export const content = style({
	overflow: 'hidden',
	backgroundColor: 'white',
	borderRadius: 6,
	boxShadow:
		'0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const viewport = style({
	padding: 5,
})

export const item = style({
	fontSize: vars.typography.fontSize.sm,
	fontWeight: vars.typography.fontWeight.medium,
	lineHeight: 1,
	color: vars.color['grey-800'],
	borderRadius: 3,
	display: 'flex',
	alignItems: 'center',
	height: 25,
	padding: '0 25px 0 25px',
	position: 'relative',
	userSelect: 'none',

	selectors: {
		'&[data-disabled]': {
			color: vars.color['grey-500'],
			pointerEvents: 'none',
		},

		'&[data-highlighted]': {
			outline: 'none',
			backgroundColor: vars.color['grey-600'],
			color: vars.color.white,
		},
	},
})

export const indicator = style({
	position: 'absolute',
	left: 0,
	width: 25,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
})

export const scrollButton = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: 25,
	backgroundColor: 'white',
	color: vars.color['grey-800'],
	cursor: 'default',
})
