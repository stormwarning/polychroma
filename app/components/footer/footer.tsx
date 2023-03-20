import { componentStyles } from '~/styles'

import { Box } from '../box/box'
import { IconGitHub } from '../icons/icon-github'
import { IconTwitter } from '../icons/icon-twitter'
import { Masthead } from '../masthead/masthead'

import { FooterLink } from './footer-link'

const styles = componentStyles.Footer

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
			<Masthead className="hidden lg:block" aria-hidden="true" />
			<Box className={styles.credit}>
				<p>
					By{' '}
					<FooterLink href="https://tidaltheory.io/">
						@stormwarning
					</FooterLink>
				</p>
				<Box display="flex" justifyContent="flex-end" gap={8}>
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
