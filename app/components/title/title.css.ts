import { style } from '@vanilla-extract/css'

import { vars } from '~/styles/theme.css'

export const title = style({
	fontSize: vars.typography.fontSize.sm,
	fontWeight: vars.typography.fontWeight.semibold,
	letterSpacing: vars.typography.letterSpacing.widest,
	textTransform: 'uppercase',
})
