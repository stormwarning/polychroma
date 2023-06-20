import { createVar, style, fallbackVar } from '@vanilla-extract/css'

export const swatchBackground = createVar()

export const swatch = style({
	backgroundColor: swatchBackground,
	borderRadius: '9999px',
	boxShadow: 'inset 0 0 0 1.5px rgba(0 0 0 / 50%)',
})
