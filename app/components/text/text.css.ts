/**
 * This file is a relatively basic example of what component-level
 * styling might look like. In reality we'd probably want to rely
 * on our `sprinkles` function as much as possible to reduce overall
 * CSS bundle size. However, if we need more specific styling than
 * our utility classes provide, we can do so using this pattern.
 *
 * More detail: https://vanilla-extract.style/documentation/styling
 */
import { style, styleVariants } from '@vanilla-extract/css'
import { sprinkles } from '~/styles/sprinkles.css'

import { fontSizes, fontWeights, vars } from '~/styles/theme.css'
import {
	ascentScale,
	capHeightScale,
	descentScale,
	fontSizeActual,
	lineGapScale,
	lineHeightOffset,
	lineHeightScale,
} from '~/styles/typography.css'

function remToPxNumber(value: string) {
	return 16 * parseFloat(value.replace('rem', ''))
}

function getLineHeightOffset(value: string) {
	let lhActual = `calc(${value} * ${fontSizeActual})`
	return `calc((((${lineHeightScale} * ${fontSizeActual}) - ${lhActual}) / 2) / ${fontSizeActual})`
}

export const root = style({
	'::before': {
		display: 'table',
		content: '""',
		marginBottom: `calc(((${ascentScale} - ${capHeightScale} + ${lineGapScale} / 2) - ${lineHeightOffset}) * -1em)`,
	},
	'::after': {
		display: 'table',
		content: '""',
		marginTop: `calc(((${descentScale} + ${lineGapScale} / 2) - ${lineHeightOffset}) * -1em)`,
	},
})

// This is an example of how we can use `styleVariants`
// create a collection of styles that map to a prop value.
// export const size = sprinkles(fontSizes)

export const weight = styleVariants(
	Object.fromEntries(
		Object.entries(fontWeights).map(([key, value]) => [
			[key],
			{ fontWeight: value },
		])
	)
)

export const leading = styleVariants(
	Object.fromEntries(
		Object.entries(vars.typography.lineHeight).map(([key, value]) => [
			[key],
			{
				vars: { [lineHeightOffset]: getLineHeightOffset(value) },
				lineHeight: value,
			},
		])
	)
)

export const tracking = styleVariants(
	Object.fromEntries(
		Object.entries(vars.typography.letterSpacing).map(([key, value]) => [
			[key],
			{ letterSpacing: value },
		])
	)
)

export const transform = styleVariants({
	none: { textTransform: 'none' },
	uppercase: { textTransform: 'uppercase' },
	lowercase: { textTransform: 'lowercase' },
})
