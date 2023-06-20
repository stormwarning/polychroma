import { style } from '@vanilla-extract/css'

import { vars } from '~/styles/theme.css'

export const button = style({
	fontFamily: 'inherit',
	color: vars.color['grey-900'],
	textTransform: 'uppercase',
	background: vars.color['grey-100'],
	border: 0,
	borderRadius: vars.radius.sm,
	cursor: 'pointer',
	boxShadow:
		'0 2px 10px rgba(0, 0, 0, 0.12), 0 20px 50px 0 rgba(0, 0, 0, 0.14)',

	':hover': {
		background: vars.color.white,
	},
})
