import { Box } from '../box/box';
import { NavItem } from './nav-item';

import { componentStyles } from '~/styles';
const styles = componentStyles.Nav;

export function Nav() {
  return (
    <Box as="nav" className={styles.nav} position="relative" padding={32}>
      <Box display="flex" gap={16} maxWidth="md" marginX="auto">
        {/* <div className="flex gap-4 max-w-md mx-auto"> */}
        <NavItem to="/">Controls</NavItem>
        <NavItem to="/info/">Info</NavItem>
        {/* </div> */}
      </Box>
    </Box>
  );
}
