import { type ReactNode } from 'react'

import { Box } from '../box/box'
import { Footer } from '../footer/footer'
import { Gradient } from '../gradient/gradient'
import { useGradientState } from '../gradient/gradient-provider'
import { Masthead } from '../masthead/masthead'
import { Nav } from '../nav/nav'

import * as styles from './layout.css'

interface Props {
	children: ReactNode
}

export function Layout({ children }: Props) {
	let { fixedGradient } = useGradientState()

	return (
		<article
			className={styles.article}
			// @ts-ignore
			style={{ '--gradient': fixedGradient }}
		>
			<Box
				className={styles.header}
				position={{ desktop: 'sticky' }}
				top={0}
				height={{ desktop: 'screen-h' }}
			>
				<Masthead className="mix-burn" />
			</Box>
			<main className={styles.main}>
				<Nav />
				<Box
					as="section"
					className={styles.section}
					padding={32}
					paddingTop={{ desktop: 0 }}
					paddingBottom={{ desktop: 64 }}
				>
					{children}
				</Box>
				<Gradient />
			</main>
			<Footer />
		</article>
	)
}
