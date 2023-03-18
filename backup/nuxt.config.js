import { version } from './package.json'

function getVersion() {
    let string = JSON.stringify(version) || ''
    return string.replace(/"/g, '')
}

export default {
    /** Headers of the page. */
    head: {
        htmlAttrs: { class: 'bg-grey-100 overscroll-none' },
        bodyAttrs: { class: 'font-sans text-grey-800 antialiased' },
        title: 'Polychroma — Better gradients through colour spaces.',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                meta: 'description',
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
        link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
    },

    /** Global CSS. */
    css: ['~assets/css/main.css'],

    env: {
        VERSION: getVersion(),
    },

    build: {
        postcss: {
            plugins: {
                autoprefixer: {},

                // https://github.com/jonathantneal/postcss-advanced-variables#features
                'postcss-advanced-variables': {},

                // https://preset-env.cssdb.org/features
                'postcss-preset-env': {
                    stage: 0,
                },
            },
        },
    },

    plugins: [],

    modules: [
        ['@nuxtjs/google-analytics', { ua: 'UA-58836125-4' }],
        ['@nuxtjs/markdownit', { preset: 'commonmark', typographer: true }],
        [
            '@nuxtjs/pwa',
            {
                meta: { appleStatusBarStyle: 'black-translucent' },
                manifest: { name: 'Polychroma' },
            },
        ],
    ],

    buildModules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
}
