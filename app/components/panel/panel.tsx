import { Box, type BoxProps } from '../box/box'

import * as styles from './panel.css'

interface Props extends BoxProps {}

export function Panel({ children, ...props }: Props) {
	return (
		<Box {...props}>
			<Box className={styles.panel}>{children}</Box>
		</Box>
	)
}
