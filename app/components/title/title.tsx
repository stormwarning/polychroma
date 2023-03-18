import type { ReactNode } from 'react';

import { Box } from '~/components';
import { componentStyles } from '~/styles';

const styles = componentStyles.Title;

interface Props {
  children: ReactNode;
}

export function Title({ children, ...props }: Props) {
  return (
    <Box as="h2" className={styles.title}>
      {children}
    </Box>
  );
}
