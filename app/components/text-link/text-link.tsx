import type { ReactNode } from 'react';
import { Link } from '@remix-run/react';
import { type To } from 'react-router-dom';

import { componentStyles } from '~/styles';

const styles = componentStyles.TextLink;

interface Props {
  children: ReactNode;
  to: To;
}

export function TextLink({ children, ...props }: Props) {
  return (
    <Link {...props} className={styles.link}>
      {children}
    </Link>
  );
}
