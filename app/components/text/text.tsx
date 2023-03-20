/**
 * Note that styles are imported from "~/styles" rather than
 * "./Text.css.ts". This is because we need to import the
 * compiled output from the vanilla-extract build step,
 * otherwise our `.css.ts` files would go through the Remix
 * compiler and wouldn't generate any static CSS.
 */
import type { ReactNode } from 'react'

import { componentStyles } from '~/styles'

import { Box, type BoxProps } from '../box/box'

const styles = componentStyles.Text

interface Props {
	children: ReactNode
	as?: BoxProps['as']
	className?: BoxProps['className']
	size?: keyof typeof styles.size
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
				styles.size[size],
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
