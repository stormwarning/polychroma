import '~/styles/global.css'

import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'

import { Layout, GradientProvider } from '~/components'
import { themeClass } from '~/styles/theme.css'

const TITLE = 'Polychroma'
const DESCRIPTION =
	'Generate better CSS gradients using alternative colour spaces & Bezier interpolation.'
const URL = 'https://polychroma.app/'

export const links: LinksFunction = () =>
	cssBundleHref
		? [
				{
					rel: 'preload',
					href: '/build/_assets/inter-roman.var-WIJJYAE4-WIJJYAE4.woff2',
					as: 'font',
					type: 'font/woff2',
				},
				{
					rel: 'stylesheet',
					href: cssBundleHref,
				},
		  ]
		: []

export const meta: MetaFunction = () => ({
	// eslint-disable-next-line unicorn/text-encoding-identifier-case
	charset: 'utf-8',
	title: `${TITLE} — Better gradients through colour spaces.`,
	viewport: 'width=device-width,initial-scale=1',
	description: DESCRIPTION,
	'og:title': TITLE,
	'og:type': 'website',
	'og:url': URL,
	'og:image': `${URL}icon.png`,
	'og:description': DESCRIPTION,
	'og:site_name': TITLE,
	'twitter:card': 'summary',
	'twitter:title': TITLE,
	'twitter:description': DESCRIPTION,
	'twitter:creator': '@stormwarning',
	'twitter:image:src': `${URL}icon.png`,
})

export default function App() {
	return (
		<html lang="en" className={themeClass}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<GradientProvider>
					<Layout>
						<Outlet />
					</Layout>
				</GradientProvider>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
