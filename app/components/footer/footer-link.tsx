import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Box } from '~/components'
import { componentStyles } from '~/styles'

const styles = componentStyles.Footer

interface Props extends Omit<ComponentPropsWithoutRef<'a'>, 'color'> {
	children: ReactNode
	social?: boolean
}

export function FooterLink({ children, social, ...props }: Props) {
	return (
		<Box
			as="a"
			display={social ? 'inline-block' : undefined}
			width={social ? 32 : undefined}
			height={social ? 32 : undefined}
			padding={social ? 8 : undefined}
			className={styles.link}
			{...props}
		>
			{children}
		</Box>
	)
}
