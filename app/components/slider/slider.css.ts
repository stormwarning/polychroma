import { style, styleVariants } from '@vanilla-extract/css'

import { fontSizes, fontWeights, vars } from '../../../styles/theme.css'

export const root = style({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	userSelect: 'none',
	touchAction: 'none',
	height: 20,
})
// .blackA {
// 	--blackA1: hsla(0, 0%, 0%, 0.012);
// 	--blackA2: hsla(0, 0%, 0%, 0.027);
// 	--blackA3: hsla(0, 0%, 0%, 0.047);
// 	--blackA4: hsla(0, 0%, 0%, 0.071);
// 	--blackA5: hsla(0, 0%, 0%, 0.090);
// 	--blackA6: hsla(0, 0%, 0%, 0.114);
// 	--blackA7: hsla(0, 0%, 0%, 0.141);
// 	--blackA8: hsla(0, 0%, 0%, 0.220);
// 	--blackA9: hsla(0, 0%, 0%, 0.439);
// 	--blackA10: hsla(0, 0%, 0%, 0.478);
// 	--blackA11: hsla(0, 0%, 0%, 0.565);
// 	--blackA12: hsla(0, 0%, 0%, 0.910);
//   }
export const track = style({
	// backgroundColor: 'rgba(0, 0, 0, 0.478)',
	backgroundColor: vars.color['grey-400'],
	position: 'relative',
	flexGrow: 1,
	borderRadius: vars.radius.full,
	height: 3,
})

export const range = style({
	position: 'absolute',
	backgroundColor: vars.color['cyan-700'],
	borderRadius: vars.radius.full,
	height: '100%',
})

export const thumb = style({
	display: 'block',
	width: 20,
	height: 20,
	backgroundColor: vars.color['cyan-700'],
	boxShadow: `0 2px 10px rgba(0, 0, 0, 0.141)`,
	borderRadius: vars.radius.full,
	cursor: 'grab',

	':hover': { backgroundColor: vars.color['cyan-800'] },
	':focus': { outline: 'none', boxShadow: `0 0 0 4px rgba(0, 0, 0, 0.220)` },
})
