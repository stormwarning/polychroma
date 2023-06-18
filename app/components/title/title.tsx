import type { ReactNode } from 'react'

import { Text } from '../text/text'

interface Props {
	children: ReactNode
}

export function Title({ children }: Props) {
	return (
		<Text
			as="h2"
			size="sm"
			weight="semibold"
			transform="uppercase"
			tracking="widest"
		>
			{children}
		</Text>
	)
}
