import Color from 'colorjs.io'

import {
	Box,
	CHANGE_MODE,
	GradientOptions,
	Legend,
	OptionGroup,
	Panel,
	Select,
	SelectItem,
	Stack,
	useGradientState,
} from '~/components'
import { ACTIVE_SPACES } from '~/utils/color-space'

export default function Index() {
	let { dispatch } = useGradientState()

	let spaces = ACTIVE_SPACES.map((space) => ({
		id: Color.spaces[space].id,
		name: Color.spaces[space].name,
	}))

	let handleModeChange = (value: string) => {
		dispatch({
			type: CHANGE_MODE,
			mode: value,
		})
	}

	return (
		<Box as="form" maxWidth="md" marginX="auto">
			<Stack space={64}>
				<Box as="fieldset" padding={0} border="none">
					<Legend>Interpolation Options</Legend>
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
						<GradientOptions />
					</Panel>
				</Box>
			</Stack>
		</Box>
	)
}
