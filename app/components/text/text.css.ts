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

import { fontSizes, fontWeights, vars } from '../../../styles/theme.css'

export const root = style({})

// This is an example of how we can use `styleVariants`
// create a collection of styles that map to a prop value.
export const size = styleVariants(
	Object.fromEntries(
		Object.entries(fontSizes).map(([key, value]) => [
			[key],
			{ fontSize: value },
		])
	)
)

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
			{ lineHeight: value },
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
