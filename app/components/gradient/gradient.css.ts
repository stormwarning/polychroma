import { style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme.css'

export const section = style({
	gridArea: 'result',
	display: 'grid',
	gridTemplateRows: 'auto',
	gridTemplateColumns: '1fr',
	paddingTop: 136,
})

export const figure = style({
	margin: 0,
})

export const code = style({
	fontSize: vars.typography.fontSize.sm,
	lineHeight: 2,
	textTransform: 'lowercase',
	whiteSpace: 'normal',
	mixBlendMode: 'color-burn',
	opacity: 0.75,
})
