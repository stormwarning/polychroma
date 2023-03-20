import { type ReactNode } from 'react'

import { componentStyles } from '~/styles'

import { Box } from '../box/box'

const styles = componentStyles.Option

interface Props {
	children: ReactNode
	label: ReactNode
	icon: ReactNode
}

export function Option({ children, label, icon }: Props) {
	return (
		<Box as="details" className={styles.details}>
			<Box
				as="summary"
				className={styles.summary}
				width="full"
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				padding={[16, 16, 32]}
			>
				{/* <div className="w-full flex items-center justify-between p-4 lg:p-8"> */}
				{label}
				{icon}
				{/* </div> */}
			</Box>
			<div className="relative p-4 lg:p-8 lg:pt-0 lg:pr-4 -mt-4 mr-8 lg:mr-16">
				{children}
			</div>
		</Box>
	)
}
