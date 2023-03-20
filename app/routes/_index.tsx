import { ChangeEvent, useState } from 'react'

import {
	Box,
	CHANGE_ANGLE,
	Legend,
	Option,
	OptionGroup,
	Panel,
	Slider,
	Stack,
	Text,
	useGradientState,
} from '~/components'

export default function Index() {
	let { dispatch, angle } = useGradientState()
	let [angleValue, setAngleValue] = useState(angle)

	let rotation = `rotate(${angle} 10 10)`

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
					<Panel></Panel>
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
