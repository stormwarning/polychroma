import { Link } from '@remix-run/react'
import type { ReactNode } from 'react'
import { type To } from 'react-router-dom'

import * as styles from './text-link.css'

interface Props {
	children: ReactNode
	to: To
}

export function TextLink({ children, ...props }: Props) {
	return (
		<Link {...props} className={styles.link}>
			{children}
		</Link>
	)
}
