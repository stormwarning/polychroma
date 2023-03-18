/**
 * Note that styles are imported from "~/styles" rather than
 * "./Text.css.ts". This is because we need to import the
 * compiled output from the vanilla-extract build step,
 * otherwise our `.css.ts` files would go through the Remix
 * compiler and wouldn't generate any static CSS.
 */
import type { ReactNode } from 'react';

import { Box, type BoxProps } from '~/components';

import { componentStyles } from '~/styles';

const styles = componentStyles.Text;

interface Props {
  children: ReactNode;
  as?: BoxProps['as'];
  className?: BoxProps['className'];
  size?: keyof typeof styles.size;
  weight?: keyof typeof styles.weight;
  leading?: keyof typeof styles.leading;
  tracking?: keyof typeof styles.tracking;
}

export function Text({
  children,
  as = 'span',
  className,
  size = 'base',
  weight = 'normal',
  leading = 'normal',
  tracking,
}: Props) {
  return (
    <Box
      as={as}
      className={[
        styles.root,
        className,
        styles.size[size],
        styles.weight[weight],
        styles.leading[leading],
        tracking && styles.tracking[tracking],
      ]}
      // color={{
      //   lightMode: 'grey-700',
      //   darkMode: 'grey-300',
      // }}
    >
      {children}
    </Box>
  );
}
