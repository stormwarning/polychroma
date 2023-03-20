import type { ReactNode } from 'react'

import { componentStyles } from '~/styles'

import { Text } from '../text/text'

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
