import { ChangeEvent, useState } from 'react'

import Color from 'colorjs.io'

import {
	Box,
	CHANGE_ANGLE,
	CHANGE_MODE,
	Legend,
	Option,
	OptionGroup,
	Panel,
	Slider,
	Stack,
	Text,
	useGradientState,
} from '~/components'
import { Select, SelectItem } from '~/components/select/select'
import { ACTIVE_SPACES } from '~/utils/color-space'

export default function Index() {
	let { dispatch, angle, mode } = useGradientState()
	let [angleValue, setAngleValue] = useState(angle)

	let spaces = ACTIVE_SPACES.map((space) => ({
		id: Color.spaces[space].id,
		name: Color.spaces[space].name,
	}))
	// let spaces = Object.values(Color.spaces)
	// 	.map((s) => ({
	// 		id: s.id,
	// 		name: s.name,
	// 	}))
	// 	.filter((space) => ACTIVE_SPACES.includes(space.id))
	// 	.sort()

	let rotation = `rotate(${angle} 10 10)`

	let handleModeChange = (value: string) => {
		dispatch({
			type: CHANGE_MODE,
			mode: value,
		})
	}

	let handleAngleChange = (value: number) => {
		setAngleValue(value)
		dispatch({
			type: CHANGE_ANGLE,
			angle: value,
		})
	}

	return (
		<Box as="form" maxWidth="md" marginX="auto">
			<Stack space={64}>
				<Box as="fieldset" padding={0} border="none">
					<Legend>Colour Mode</Legend>
					<Panel>
						<Box
							width="full"
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							padding={[16, 16, 32]}
						>
							<Select
								defaultValue="lab"
								onValueChange={handleModeChange}
							>
								{spaces.map((space, index) => (
									<SelectItem
										key={`${space.id}-${index}`}
										value={space.id}
									>
										{space.name}
									</SelectItem>
								))}
							</Select>
						</Box>
					</Panel>
				</Box>

				<Box as="fieldset" padding={0} border="none">
					<Legend>Gradient Options</Legend>
					<Panel as={OptionGroup}>
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
								value={angleValue}
								min={0}
								max={360}
								onChange={handleAngleChange}
							/>
						</Option>
					</Panel>
					{/* inline-block text-xs lg:text-sm font-medium uppercase tracking-widest text-grey-600 */}
				</Box>
			</Stack>
		</Box>
	)
}
