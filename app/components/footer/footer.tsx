import { Box } from '../box/box'
import { IconGitHub } from '../icons/icon-github'
import { IconTwitter } from '../icons/icon-twitter'
import { Masthead } from '../masthead/masthead'

import { FooterLink } from './footer-link'

import * as styles from './footer.css'

export function Footer() {
	return (
		<Box
			as="footer"
			className={styles.footer}
			position="sticky"
			top={{ desktop: 0 }}
			bottom={{ desktop: 0 }}
			display="flex"
			alignItems="flex-end"
			height={{ desktop: 'screen-h' }}
			paddingX={32}
			paddingY={[32, 32, 64]}
		>
			<Masthead hidden aria-hidden="true" />
			<Box
				display="grid"
				gap={8}
				paddingRight={{ mobile: 8, desktop: 0 }}
				className={styles.credit}
			>
				<p>
					By{' '}
					<FooterLink href="https://tidaltheory.io/">
						@stormwarning
					</FooterLink>
				</p>
				<Box
					display="flex"
					justifyContent="flex-end"
					gap={8}
					paddingBottom={{ mobile: 0, desktop: 8 }}
				>
					<FooterLink
						social
						href="https://github.com/stormwarning/polychroma"
					>
						<IconGitHub />
					</FooterLink>
					<FooterLink social href="https://twitter.com/stormwarning">
						<IconTwitter />
					</FooterLink>
				</Box>
			</Box>
		</Box>
	)
}
