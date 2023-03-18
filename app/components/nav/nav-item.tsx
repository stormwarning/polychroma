import { NavLink as RouterNavLink } from '@remix-run/react';
import type { ReactNode } from 'react';
import { type To } from 'react-router-dom';

import { componentStyles } from '~/styles';

const styles = componentStyles.Nav;

interface Props {
  children: ReactNode;
  to: To;
}

export function NavItem({ children, to }: Props) {
  return (
    <RouterNavLink to={to} className={styles.item}>
      {children}
    </RouterNavLink>
  );
}
