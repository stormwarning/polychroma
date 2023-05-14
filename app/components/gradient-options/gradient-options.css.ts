import { createVar, style, fallbackVar } from '@vanilla-extract/css'

import { vars } from '../../../styles/theme.css'

export const swatchBackground = createVar()

export const swatch = style({
	backgroundColor: swatchBackground,
})
