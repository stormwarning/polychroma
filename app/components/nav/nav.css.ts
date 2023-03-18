import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const nav = style({
  gridArea: 'navbar',
});

export const item = style({
  zIndex: 10,
  display: 'block',
  paddingBlock: vars.space[8],
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.semibold,
  lineHeight: '1rem',
  letterSpacing: '0.1em',
  color: vars.color['grey-700'],
  textTransform: 'uppercase',
  textDecoration: 'none',

  selectors: {
    '&[aria-current]': {
      borderBlockEnd: '0.15em solid',
    },
  },
});
