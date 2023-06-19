/**
 * This file is configuration for Sprinkles, a library built on
 * top of vanilla-extract for generating type-safe utility classes.
 * The generated `sprinkles` function can be used at build time in
 * `.css.ts` files, but importantly, it can also be used at runtime
 * since it doesn't generate CSS on demand. Instead, it returns a
 * string of class names that reference styles that have already
 * been generated.
 *
 * More detail: https://vanilla-extract.style/documentation/packages/sprinkles
 */
import {
	defineProperties,
	createSprinkles,
	createNormalizeValueFn,
	RequiredConditionalValue,
} from '@vanilla-extract/sprinkles'

import { fontSizes, vars } from './theme.css'
import {
	fontSizeActual,
	lineHeightOffset,
	lineHeightScale,
} from './typography.css'

function remToPxNumber(value: string) {
	return 16 * parseFloat(value.replace('rem', ''))
}

function getLineHeightOffset(value: string) {
	let lhActual = `calc(${value} * ${fontSizeActual})`
	return `calc((((${lineHeightScale} * ${fontSizeActual}) - ${lhActual}) / 2) / ${fontSizeActual})`
}

const responsiveProperties = defineProperties({
	conditions: {
		// This is a basic example of responsive conditions, but these conditions
		// can be named and customized however we like. We can even scope our
		// conditions to selectors and feature/container queries!
		// More detail: https://vanilla-extract.style/documentation/packages/sprinkles/#conditions
		mobile: {},
		tablet: { '@media': 'screen and (min-width: 768px)' },
		desktop: { '@media': 'screen and (min-width: 1024px)' },
	},
	// The default condition is applied when non-conditional values are used,
	// e.g. `sprinkles({ padding: 'small' })` is equivalent to writing
	// `sprinkles({ padding: { mobile: 'small' }}) since it's mobile-first.
	defaultCondition: 'mobile',
	responsiveArray: ['mobile', 'tablet', 'desktop'],

	// Sprinkles generates a separate class for each property
	// value at each condition, allowing us to dynamically
	// select them in a type-safe way at runtime.
	properties: {
		// By defining these values in an array format, we're
		// configuring them to simply map through to the usual
		// CSS values rather than using a custom naming convention,
		// e.g. `sprinkles({ display: 'flex' })`
		display: [
			'none',
			'flex',
			'grid',
			'block',
			'inline',
			'inline-block',
			'inline-flex',
		],
		position: ['static', 'relative', 'absolute', 'sticky'],
		flexDirection: ['row', 'column'],
		justifyContent: [
			'stretch',
			'flex-start',
			'center',
			'flex-end',
			'space-around',
			'space-between',
		],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],

		border: ['none'],

		// Here we're applying our space scale to `gap` and `padding`
		// properties via our `space` object. This allows us to
		// provide our own semantic naming convention,
		// e.g. `sprinkles({ paddingTop: 'small' })`
		gap: vars.space,
		paddingTop: {
			...vars.space,
			auto: 'auto',
		},
		paddingBottom: {
			...vars.space,
			auto: 'auto',
		},
		paddingLeft: {
			...vars.space,
			auto: 'auto',
		},
		paddingRight: {
			...vars.space,
			auto: 'auto',
		},
		inset: vars.space,
		top: vars.space,
		right: vars.space,
		bottom: vars.space,
		left: vars.space,

		width: { ...vars.size, ...vars.space },
		maxWidth: vars.size,
		height: { ...vars.size, ...vars.space },
		maxHeight: vars.size,

		marginTop: { ...vars.space, auto: 'auto' },
		marginRight: { ...vars.space, auto: 'auto' },
		marginBottom: { ...vars.space, auto: 'auto' },
		marginLeft: { ...vars.space, auto: 'auto' },

		fontSize: Object.fromEntries(
			Object.entries(fontSizes).map(([key, value]) => [
				[key],
				{
					vars: { [fontSizeActual]: remToPxNumber(value) },
					fontSize: value,
				},
			])
		),
		lineHeight: Object.fromEntries(
			Object.entries(fontSizes).map(([key, value]) => [
				[key],
				{
					vars: { [lineHeightOffset]: getLineHeightOffset(value) },
					lineHeight: value,
				},
			])
		),
	},
	shorthands: {
		// Shorthands allow us to use a single property to apply multiple
		// utility classes at once, e.g. `sprinkles({ padding: 'small' })` maps
		// to `sprinkles({ paddingTop: 'small', paddingBottom: 'small', ...etc })`
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		placeItems: ['justifyContent', 'alignItems'],
		marginX: ['marginLeft', 'marginRight'],
	},
})

// These properties are defined separately from `responsiveProperties`
// because they're being configured with different conditions.
const colorProperties = defineProperties({
	conditions: {
		lightMode: {},
		darkMode: { '@media': '(prefers-color-scheme: dark)' },
	},
	defaultCondition: 'lightMode',
	properties: {
		color: vars.color,
		background: vars.color,
	},
})

const unconditionalProperties = defineProperties({
	properties: {
		opacity: vars.opacity,
		zIndex: vars.zIndex,
	},
})

// Here we combine all of our properties into a single `sprinkles` function
export const sprinkles = createSprinkles(
	responsiveProperties,
	colorProperties,
	unconditionalProperties
)
export const normalizeResponsiveValue =
	createNormalizeValueFn(responsiveProperties)

export type RequiredResponsiveValue<Value extends string | number> =
	RequiredConditionalValue<typeof responsiveProperties, Value>
export type FontSize = keyof typeof vars.typography.fontSize
export type ResponsiveFontSize = RequiredResponsiveValue<FontSize>

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0]
