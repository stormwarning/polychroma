import type { ReactNode } from 'react'

import { Box } from '../box/box'

import * as styles from './title.css'

interface Props {
	children: ReactNode
}

export function Title({ children, ...props }: Props) {
	return (
		<Box as="h2" className={styles.title}>
			{children}
		</Box>
	)
}
