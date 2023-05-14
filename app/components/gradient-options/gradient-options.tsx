import { assignInlineVars } from '@vanilla-extract/dynamic'

import { componentStyles } from '~/styles'

import { Box } from '../box/box'
import { ColorPicker } from '../color-picker/color-picker'
import { CHANGE_ANGLE, useGradientState } from '../gradient/gradient-provider'
import { Option } from '../option/option'
import { Slider } from '../slider/slider'
import { Text } from '../text/text'

const { swatch, swatchBackground } = componentStyles.GradientOptions

export function GradientOptions() {
	let { dispatch, angle, startColor, endColor } = useGradientState()

	let rotation = `rotate(${angle} 10 10)`
	let startSwatch = startColor.display({ space: 'srgb', format: 'hex' })
	let endSwatch = endColor.display({ space: 'srgb', format: 'hex' })

	let handleAngleChange = (value: Array<number>) => {
		dispatch({
			type: CHANGE_ANGLE,
			angle: value[0],
		})
	}

	return (
		<>
			<Option
				label={
					<Text
						as="label"
						size="sm"
						weight="medium"
						tracking="widest"
						transform="uppercase"
					>
						Direction
					</Text>
				}
				icon={
					<svg width="16" height="16" viewBox="0 0 20 20">
						<path
							transform={rotation}
							d="M9 2.0619C5.0537 2.554 2 5.92037 2 10c0 4.41828 3.58172 8 8 8s8-3.58172 8-8c0-4.07962-3.0537-7.446-7-7.9381V9H9V2.0619zM10 20C4.47715 20 0 15.52285 0 10S4.47715 0 10 0s10 4.47715 10 10-4.47715 10-10 10z"
							fillRule="nonzero"
							fill="#000"
							fillOpacity="1"
						></path>
					</svg>
				}
			>
				<Slider
					defaultValue={[angle]}
					min={0}
					max={360}
					onValueChange={handleAngleChange}
				/>
			</Option>
			<Option
				label={
					<Text
						as="label"
						size="sm"
						weight="medium"
						tracking="widest"
						transform="uppercase"
					>
						Start Colour
					</Text>
				}
				icon={
					<Box
						className={swatch}
						width={16}
						height={16}
						style={assignInlineVars({
							[swatchBackground]: startSwatch,
						})}
					/>
				}
			>
				<ColorPicker stopIndex={0} />
			</Option>
		</>
	)
}
