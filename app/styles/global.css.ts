/**
 * This file allows us to set up our global styles. If we also
 * wanted to apply a CSS reset, this is where we'd define it.
 *
 * More detail: https://vanilla-extract.style/documentation/global-api/global-style
 */
import { globalFontFace, globalStyle } from '@vanilla-extract/css'
import { transparentize } from 'polished'

import { greyPalette, vars } from './theme.css'
import {
	ascentScale,
	capHeightScale,
	descentScale,
	lineGapScale,
	lineHeightScale,
} from './typography.css'

const METRICS = {
	capHeight: 2048,
	ascent: 2728,
	descent: -680,
	lineGap: 0,
	unitsPerEm: 2816,
}

globalFontFace('Inter', {
	src: "url('../../public/fonts/inter-roman.var.woff2') format('woff2')",
	fontWeight: '100 900',
	fontDisplay: 'swap',
})

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
})

globalStyle('*', {
	margin: 0,
})

globalStyle('html', {
	backgroundColor: vars.color['grey-100'],
	overscrollBehavior: 'none',
})

globalStyle('body', {
	color: vars.color['grey-700'],
	fontFamily: 'Inter',
	WebkitFontSmoothing: 'antialiased',
	MozOsxFontSmoothing: 'grayscale',
	vars: {
		[ascentScale]: `${METRICS.ascent / METRICS.unitsPerEm}`,
		[descentScale]: `${Math.abs(METRICS.descent) / METRICS.unitsPerEm}`,
		[capHeightScale]: `${METRICS.capHeight / METRICS.unitsPerEm}`,
		[lineGapScale]: `${METRICS.lineGap / METRICS.unitsPerEm}`,
		[lineHeightScale]: `${
			(METRICS.ascent + METRICS.lineGap + Math.abs(METRICS.descent)) /
			METRICS.unitsPerEm
		}`,
	},
})

globalStyle('fieldset', {
	padding: vars.space[0],
	border: 'none',
})

globalStyle('code', {
	fontFamily:
		"'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
})

globalStyle('p > code', {
	margin: '0 1px',
	padding: '0.1875em 0.25em',
	fontWeight: 500,
	color: vars.color['grey-800'],
	backgroundColor: transparentize(0.95, greyPalette['grey-900']),
	borderRadius: vars.radius.sm,
})
