import type { ReactNode } from 'react'

import { Box, type BoxProps } from '../box/box'

import * as styles from './text.css'
import { ResponsiveFontSize, sprinkles } from '~/styles/sprinkles.css'

interface Props {
	children: ReactNode
	as?: BoxProps['as']
	className?: BoxProps['className']
	size?: ResponsiveFontSize
	weight?: keyof typeof styles.weight
	leading?: keyof typeof styles.leading
	tracking?: keyof typeof styles.tracking
	transform?: keyof typeof styles.transform
}

export function Text({
	children,
	as = 'span',
	className,
	size = 'base',
	weight = 'normal',
	leading = 'normal',
	tracking,
	transform,
}: Props) {
	return (
		<Box
			as={as}
			className={[
				styles.root,
				className,
				sprinkles({ fontSize: size }),
				styles.weight[weight],
				styles.leading[leading],
				tracking && styles.tracking[tracking],
				transform && styles.transform[transform],
			]}
			// color={{
			//   lightMode: 'grey-700',
			//   darkMode: 'grey-300',
			// }}
		>
			{children}
		</Box>
	)
}
