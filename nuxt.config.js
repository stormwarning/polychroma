const webpack = require('webpack')
const versionNum = JSON.stringify(require('./package.json').version)

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: { class: 'bg-light-gray' },
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

            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-title', content: 'Polychroma' },

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
                content: 'https://polychroma.now.sh/icon-1024.png',
            },

            { property: 'og:title', content: 'Polychroma' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://polychroma.now.sh/' },
            {
                property: 'og:image',
                content: 'https://polychroma.now.sh/icon-1024.png',
            },
            {
                property: 'og:description',
                content:
                    'Generate better CSS gradients using alternative colour spaces & Bezier interpolation.',
            },
            { property: 'og:site_name', content: 'Polychroma' },
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png',
            },

            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        ],
    },

    /*
    ** Global CSS
    */
    // css: ['~assets/css/main.css'],

    build: {
        vendor: [
            'chroma-js',
            // 'vue-color',
        ],
        extend (config, { dev, isClient, isSserver }) {
            config.module.rules.push({
                test: /\.js$/,
                loader: 'babel',
                include: ['/node_modules/vue-color'],
            })
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.VERSION': versionNum,
            }),
        ],
    },

    plugins: [
        // { src: '~plugins/vue-color.js' },
        // { src: '~plugins/analytics.js', ssr: false },
    ],

    modules: [['@nuxtjs/google-analytics', { ua: 'UA-58836125-4' }]],
}
