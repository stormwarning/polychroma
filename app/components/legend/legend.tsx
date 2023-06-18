import type { ReactNode } from 'react'

import { Text } from '../text/text'

interface Props {
	children: ReactNode
}

export function Legend({ children }: Props) {
	return (
		<Text
			as="legend"
			size="sm"
			weight="semibold"
			tracking="widest"
			transform="uppercase"
		>
			{children}
		</Text>
	)
}
