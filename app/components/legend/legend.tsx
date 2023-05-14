import type { ReactNode } from 'react'

import { Text } from '../text/text'

import * as styles from './legend.css'

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
