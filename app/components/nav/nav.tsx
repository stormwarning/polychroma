import { componentStyles } from '~/styles'

import { Box } from '../box/box'

import { NavItem } from './nav-item'

const styles = componentStyles.Nav

export function Nav() {
	return (
		<Box as="nav" className={styles.nav} position="relative" padding={32}>
			<Box display="flex" gap={16} maxWidth="md" marginX="auto">
				<NavItem to="/">Controls</NavItem>
				<NavItem to="/info/">Info</NavItem>
			</Box>
		</Box>
	)
}
