import { useEffect, useState } from 'react'

import { assignInlineVars } from '@vanilla-extract/dynamic'
import Color from 'colorjs.io'
import type { Coords } from 'colorjs.io/types/src/color'
import type { StepsOptions } from 'colorjs.io/types/src/interpolation'

import { CHANGE_STOP, useGradientState } from '../gradient/gradient-provider'
import { Slider } from '../slider/slider'
import { Stack } from '../stack/stack'
import { Text } from '../text/text'

import * as styles from './color-picker.css'
import { trackBackground } from '../slider/slider.css'
import { Box } from '../box/box'

const SPACE_ID = 'oklch'

interface Props {
	stopIndex: number
}

export function ColorPicker({ stopIndex, ...props }: Props) {
	let { dispatch, stops } = useGradientState()
	let [channelScales, setChannelScales] = useState<Array<string>>([])

	let space = Color.Space.get(SPACE_ID)
	let spaceMeta = Object.entries(space.coords).map(([id, meta]) => {
		let { name, range, refRange } = meta

		name = name || id
		range = range || refRange || [0, 100]

		let [min, max] = range
		let step = (max - min) / 100
		if (step > 1) step = 1

		let isHue = id === 'h' && meta.type === 'angle'

		return { id, name, isHue, min, max, step }
	})

	let alpha = 1

	let color = stops[stopIndex]
	let channelCoords = color.coords

	useEffect(() => {
		let channelScales: Array<string> = []
		for (let [index, { isHue, min, max }] of spaceMeta.entries()) {
			let start: Coords = [...channelCoords]
			start[index] = min
			let color1 = new Color(SPACE_ID, start, alpha)

			let end: Coords = [...channelCoords]
			end[index] = max
			let color2 = new Color(SPACE_ID, end, alpha)

			let interpolationOptions: StepsOptions = {
				space: SPACE_ID,
				steps: 10,
			}

			if (isHue) {
				interpolationOptions.hue = 'raw'
			}

			let steps = Color.steps(color1, color2, interpolationOptions)
			channelScales.push(
				steps
					.map((c) => c.display({ space: 'srgb', format: 'hex' }))
					.join(', ')
			)
		}

		// Push alpha too
		// let color1 = new Color(SPACE_ID, channelCoords, 0)
		// let color2 = new Color(SPACE_ID, channelCoords, 1)
		// let steps = Color.steps(color1, color2, { steps: 10 })
		// 	.map((c) => c.display({ space: 'srgb', format: 'hex' }))
		// 	.join(', ')

		// channelScales.push(steps)
		setChannelScales(channelScales)
	}, [alpha, channelCoords, spaceMeta, channelScales])

	return (
		<Stack space={16}>
			{spaceMeta.map((channel, index) => (
				<Box
					key={channel.id}
					display="grid"
					gap={8}
					style={assignInlineVars({
						[trackBackground]: `linear-gradient(to right, ${channelScales[index]})`,
					})}
				>
					<Text
						as="label"
						className={styles.label}
						size="xs"
						transform="uppercase"
						tracking="widest"
					>
						{channel.name} ({channel.min}–{channel.max})
					</Text>
					<Slider
						hideRange
						defaultValue={[channelCoords[index]]}
						min={channel.min}
						max={channel.max}
						step={channel.step}
						onValueChange={([value]) => {
							color.set(`oklch.${channel.id}`, value)
							dispatch({
								type: CHANGE_STOP,
								stop: color,
								index: stopIndex,
							})
						}}
					/>
				</Box>
			))}
		</Stack>
	)
}
