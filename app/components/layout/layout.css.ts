import { style } from '@vanilla-extract/css'

export const article = style({
	minBlockSize: '100vh',
	display: 'grid',
	gridTemplateAreas: '"main" "footer"',
	gridTemplateRows: '1fr 120px',
	gridTemplateColumns: '1fr',

	'@media': {
		'(min-width: 1024px)': {
			gridTemplateAreas: '"main sidebar"',
			gridTemplateRows: 'auto',
			gridTemplateColumns: '1fr 240px',
		},
	},
})

export const header = style({
	zIndex: 10,
	pointerEvents: 'none',
	mixBlendMode: 'color-burn',
	gridArea: 'sidebar',
	gridRow: 1,
})

export const main = style({
	display: 'grid',
	gridArea: 'main',
	gridTemplateAreas: "'result' 'navbar' 'content'",
	gridTemplateRows: '33vh auto 1fr',
	gridTemplateColumns: '1fr',

	'@media': {
		'(min-width: 1024px)': {
			gridTemplateAreas: "'navbar result' 'content result'",
			gridTemplateRows: '8.5rem auto',
			gridTemplateColumns: '1fr 1fr',
		},
	},
})

export const section = style({
	gridArea: 'content',
})
