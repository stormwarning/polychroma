import { type ReactNode } from 'react'

import { Box } from '../box/box'

import * as styles from './option.css'

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
			<Box
				marginRight={[32, 32, 64]}
				padding={[16, 16, 32]}
				paddingTop={{ desktop: 0 }}
				paddingRight={{ desktop: 16 }}
			>
				{/* <div className="relative p-4 lg:p-8 lg:pt-0 lg:pr-4 -mt-4 mr-8 lg:mr-16"> */}
				{children}
			</Box>
		</Box>
	)
}
