import type { ReactNode } from 'react'

import { Text } from '~/components'

import { componentStyles } from '~/styles'

const styles = componentStyles.Legend

interface Props {
	children: ReactNode
}

export function Legend({ children }: Props) {
	return (
		<Text
			as="legend"
			className={styles.legend}
			size="sm"
			weight="semibold"
			tracking="widest"
		>
			{children}
		</Text>
	)
}
