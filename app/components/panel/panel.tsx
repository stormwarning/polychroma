import { type ReactNode } from 'react'

import { componentStyles } from '~/styles'

import { Box, type BoxProps } from '../box/box'

const styles = componentStyles.Panel

interface Props extends BoxProps {}

export function Panel({ children, ...props }: Props) {
	return (
		<Box {...props}>
			<Box className={styles.panel}>{children}</Box>
		</Box>
	)
}
