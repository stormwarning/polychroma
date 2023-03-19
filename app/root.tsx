import type { MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import { Layout, GradientProvider } from '~/components'

import vanillaExtractStyles from '~/styles/index.css'
import { themeClass } from '~/styles'

export function links() {
	return [
		{
			rel: 'preload',
			href: '/build/_assets/inter-roman.var-WIJJYAE4-WIJJYAE4.woff2',
			as: 'font',
			type: 'font/woff2',
		},
		{
			rel: 'stylesheet',
			href: vanillaExtractStyles,
		},
	]
}

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
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
