import { createVar, style, fallbackVar } from '@vanilla-extract/css'

export const swatchBackground = createVar()

export const swatch = style({
	backgroundColor: swatchBackground,
})
