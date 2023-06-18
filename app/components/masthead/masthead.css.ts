import { style } from '@vanilla-extract/css'

import { vars } from '~/styles/theme.css'

export const header = style({
	zIndex: 10,
})

export const title = style({
	letterSpacing: '0.25em',
	marginInlineEnd: '-0.25em',
})

export const version = style({
	textAlign: 'right',
})
