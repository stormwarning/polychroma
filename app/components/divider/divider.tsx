import { Box } from '../box/box'

export function Divider() {
	return (
		<Box position="relative">
			<Box
				position="absolute"
				zIndex={1}
				width="full"
				height={1}
				background="grey-800"
				opacity={10}
				role="separator"
				aria-orientation="horizontal"
			/>
		</Box>
	)
}
