import type { ReactNode } from 'react'

import { componentStyles } from '~/styles'

import { Box } from '../box/box'

const styles = componentStyles.Title

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
