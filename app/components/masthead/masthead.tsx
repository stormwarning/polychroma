import cx from 'clsx'

import { Box } from '../box/box'

import * as styles from './masthead.css'
import { Text } from '../text/text'

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
			{/* <h1 className={styles.title}>Polychroma</h1> */}
			<Text
				size={['2xl', '4xl', '5xl']}
				weight="bold"
				leading="none"
				transform="uppercase"
				className={styles.title}
			>
				Polychroma
			</Text>
			<Text
				size={['sm', null, 'base']}
				leading="none"
				weight="bold"
				className={styles.version}
			>
				v{version}
			</Text>
			{/* <span className={styles.version}>v{version}</span> */}
		</Box>
	)
}
