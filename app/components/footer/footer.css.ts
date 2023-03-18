import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const footer = style({
  gridArea: 'footer',
  zIndex: 10,
  overflow: 'hidden',

  '@media': {
    '(min-width: 1024px)': {
      gridArea: 'sidebar',
    },
  },
});

export const credit = style({
  flex: '1 1 auto',
  marginInline: 'auto',
  maxInlineSize: 448,
  fontSize: vars.typography.fontSize.xs,
  lineHeight: vars.typography.lineHeight.normal,
  letterSpacing: '0.1em',
  textAlign: 'right',
  textTransform: 'uppercase',

  '@media': {
    '(min-width: 1024px)': {
      paddingBlockStart: 32,
    },
  },
});

export const link = style({
  color: vars.color.black,
  textDecoration: 'none',

  ':hover': {
    opacity: 0.75,
  },

  ':focus-visible': { opacity: 0.75 },
});
