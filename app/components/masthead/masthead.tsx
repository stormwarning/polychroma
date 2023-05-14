import cx from 'clsx'

import { Box } from '../box/box'

import * as styles from './masthead.css'

interface Props {
	className?: string
	hidden?: boolean
}

export function Masthead({ className, hidden, ...props }: Props) {
	let version = '2.2.0'

	return (
		<Box
			as="header"
			className={cx(styles.header, className)}
			position="absolute"
			top={0}
			right={32}
			display={hidden ? ['none', 'none', 'grid'] : 'grid'}
			gap={16}
			paddingTop={80}
			{...props}
		>
			<h1 className={styles.title}>Polychroma</h1>
			<span className={styles.version}>v{version}</span>
		</Box>
	)
}
