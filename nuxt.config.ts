import process from 'node:process'

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	compatibilityDate: '2025-01-24',

	imports: {
		autoImport: false,
	},

	app: {
		head: {
			htmlAttrs: { class: 'bg-grey-100 overscroll-none' },
			bodyAttrs: { class: 'font-sans text-grey-800 antialiased' },
			title: 'Polychroma — Better gradients through colour spaces.',
			meta: [
				// eslint-disable-next-line unicorn/text-encoding-identifier-case
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'description',
					content:
						'Generate better CSS gradients using alternative colour spaces & Bezier interpolation.',
				},

				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Polychroma' },
				{
					name: 'twitter:description',
					content:
						'Generate better CSS gradients using alternative colour spaces & Bezier interpolation.',
				},
				{ name: 'twitter:creator', content: '@stormwarning' },
				{
					name: 'twitter:image:src',
					content: 'https://polychroma.app/icon.png',
				},

				{ property: 'og:title', content: 'Polychroma' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://polychroma.app/' },
				{
					property: 'og:image',
					content: 'https://polychroma.app/icon.png',
				},
				{
					property: 'og:description',
					content:
						'Generate better CSS gradients using alternative colour spaces & Bezier interpolation.',
				},
				{ property: 'og:site_name', content: 'Polychroma' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},

	css: ['~/assets/css/main.css'],

	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vite-pwa/nuxt'],

	tailwindcss: {
		cssPath: '~/assets/css/main.css',
	},

	pwa: {
		manifest: {
			name: 'Polychroma',
			short_name: 'Polychroma',
			description:
				'Generate better CSS gradients using alternative colour spaces & Bezier interpolation.',
			theme_color: '#ffffff',
		},
		workbox: {
			navigateFallback: '/',
		},
		devOptions: {
			enabled: false,
		},
	},

	runtimeConfig: {
		public: {
			version: process.env.npm_package_version || '2.1.2',
		},
	},

	devtools: { enabled: true },
})
