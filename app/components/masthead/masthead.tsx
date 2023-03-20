import cx from 'clsx'

import { componentStyles } from '~/styles'

import { Box } from '../box/box'

const styles = componentStyles.Masthead

interface Props {
	className?: string
}

export function Masthead({ className, ...props }: Props) {
	let version = '2.2.0'

	return (
		<Box
			as="header"
			className={cx(styles.header, className)}
			position="absolute"
			top={0}
			right={32}
			display="grid"
			gap={16}
			paddingTop={80}
			{...props}
		>
			<h1 className={styles.title}>Polychroma</h1>
			<span className={styles.version}>v{version}</span>
		</Box>
	)
}
