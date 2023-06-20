import { style } from '@vanilla-extract/css'

import { vars } from '~/styles/theme.css'

export const root = style({})

export const label = style({
	color: vars.color['grey-600'],
})

export const value = style({
	fontVariantNumeric: 'tabular-nums',
})
