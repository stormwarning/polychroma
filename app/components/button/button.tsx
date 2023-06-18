import type { ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'

import { Box } from '../box/box'

import * as styles from './button.css'
import { Text } from '../text/text'

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'color'> {
	children: ReactNode
	icon?: ReactElement
}

export function Button({ children, icon, ...props }: Props) {
	return (
		<Box
			as="button"
			className={styles.button}
			display="flex"
			alignItems="center"
			gap={[4, 4, 8]}
			padding={[8, 8, 16]}
			{...props}
		>
			{icon}
			<Text size="xs" weight="medium" leading="none" tracking="widest">
				{children}
			</Text>
		</Box>
	)
}
