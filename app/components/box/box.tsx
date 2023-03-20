/**
 * This file is used to convert our custom `sprinkles` function
 * into a primitive `Box` component so that we don't need to
 * manually manage the `className` prop when using our own
 * utility classes, e.g. `<Box padding="small">` rather than
 * `<Box className={sprinkles({ padding: 'small' })}>`.
 */
import clsx, { type ClassValue } from 'clsx'
import {
	createElement,
	forwardRef,
	type AllHTMLAttributes,
	type ElementType,
} from 'react'

import { sprinkles, type Sprinkles } from '~/styles'

interface ExtendedBoxProps extends Sprinkles {
	as?: ElementType
	className?: ClassValue
}

export type BoxProps = Omit<
	AllHTMLAttributes<HTMLElement>,
	keyof ExtendedBoxProps
> &
	ExtendedBoxProps

export const Box = forwardRef<HTMLElement, BoxProps>(
	({ as = 'div', className, ...props }, reference) => {
		let atomProps: Record<string, unknown> = {}
		let nativeProps: Record<string, unknown> = {}

		for (let key in props) {
			// Sprinkles allows us to detect whether a given property
			// is available as part of our suite of utility classes,
			// e.g. `sprinkles.properties.has('padding')` is true
			// while `sprinkles.properties.has('onClick')` is false.
			// We use this to determine whether to pass the property
			// to Sprinkles or to the native HTML element.
			if (sprinkles.properties.has(key as keyof Sprinkles)) {
				atomProps[key] = props[key as keyof typeof props]
			} else {
				nativeProps[key] = props[key as keyof typeof props]
			}
		}

		let atomicClasses = sprinkles(atomProps)
		let customClasses = clsx(className)

		return createElement(as, {
			className: `${atomicClasses}${
				customClasses ? ` ${customClasses}` : ''
			}`,
			...nativeProps,
			reference,
		})
	}
)

Box.displayName = 'Box'
