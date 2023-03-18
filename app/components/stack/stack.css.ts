import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../../styles/theme.css';

export const stack = style({
  display: 'flex',
  flexDirection: 'column',
});

export const space = styleVariants(
  Object.fromEntries(
    Object.entries(vars.space).map(([key, value]) => [[key], { gap: value }])
  )
);
