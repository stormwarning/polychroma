import type { ReactNode, ComponentPropsWithoutRef } from 'react'

import { Box } from '../box/box'

import * as styles from './button.css'

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'color'> {
	children: ReactNode
}

export function Button({ children, ...props }: Props) {
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
			{children}
		</Box>
	)
}
