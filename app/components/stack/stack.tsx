import type { ReactNode } from 'react'

import { componentStyles } from '~/styles'

import { Box, type BoxProps } from '../box/box'

const styles = componentStyles.Stack

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