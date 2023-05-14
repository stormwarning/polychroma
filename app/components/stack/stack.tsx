import type { ReactNode } from 'react'

import { Box, type BoxProps } from '../box/box'

import * as styles from './stack.css'

interface Props {
	children: ReactNode
	as?: BoxProps['as']
	space?: keyof typeof styles.space
}

export function Stack({ children, as = 'div', space = 16 }: Props) {
	return (
		<Box as={as} className={[styles.stack, styles.space[space]]}>
			{children}
		</Box>
	)
}
