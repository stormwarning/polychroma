import { style } from '@vanilla-extract/css'

import { vars } from '~/styles/theme.css'

export const panel = style({
	marginBlockStart: vars.space[12],
	backgroundColor: vars.color.white,
	borderRadius: vars.radius.sm,
	boxShadow: vars.shadow.panel,
	overflow: 'hidden',
})
