import { useCallback, useEffect, useRef, useState } from 'react'

import Color from 'colorjs.io'

import { useCallbackRef } from '~/hooks/use-callback-ref'

const SPACE_ID = 'oklch'

function arrayIsEqual(a: Array<unknown>, b: Array<unknown>) {
	return a.every((value, index) => value === b[index])
}

export function useCoordinates(
	color: string,
	onChange?: (color: string) => void
) {
	let onChangeCallback = useCallbackRef(onChange)
	let [object, updateObject] = useState(() => new Color(color).to(SPACE_ID))
	let cache = useRef({ color, object })

	/**
	 * Update local Color object if `color` property value is changed, but only
	 * if that's not the same color that we just sent to the parent.
	 */
	useEffect(() => {
		if (color !== cache.current.color) {
			let newObject = new Color(color).to(SPACE_ID)
			cache.current = { object: newObject, color }
			updateObject(newObject)
		}
	}, [color])

	/**
	 * Trigger `onChange` callback only if an updated color is different from
	 * cached one; save the new color to the ref to prevent unnecessary updates.
	 */
	useEffect(() => {
		let newColor = object.display({ space: 'srgb', format: 'hex' })
		if (
			arrayIsEqual(object.coords, cache.current.object.coords) &&
			newColor !== cache.current.color
		) {
			cache.current = { object, color: newColor }
			onChangeCallback(newColor)
		}
	}, [object, onChangeCallback])

	// Merge the current HSVA color object with updated params.
	// For example, when a child component sends `h` or `s` only
	// let handleChange = useCallback((parameters) => {
	// 	object.set(parameters)
	// }, [object])

	return [object]
}
