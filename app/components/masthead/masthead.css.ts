import { style } from '@vanilla-extract/css'
import { vars } from '../../../styles/theme.css'

export const header = style({
	zIndex: 10,
})

export const title = style({
	margin: 0,
	fontSize: vars.typography.fontSize['2xl'],
	fontWeight: vars.typography.fontWeight.bold,
	lineHeight: 1,
	textTransform: 'uppercase',
	letterSpacing: '0.25em',
	marginInlineEnd: '-0.25em',

	'@media': {
		'(min-width: 640px)': {
			fontSize: vars.typography.fontSize['4xl'],
		},
		'(min-width: 1024px)': {
			fontSize: vars.typography.fontSize['5xl'],
		},
	},
})

export const version = style({
	display: 'block',
	fontWeight: vars.typography.fontWeight.bold,
	textAlign: 'right',
	fontSize: vars.typography.fontSize.sm,
	lineHeight: 1,

	'@media': {
		'(min-width: 1024px)': {
			fontSize: vars.typography.fontSize.base,
		},
	},
})
