const webpack = require('webpack')
const versionNum = JSON.stringify(require('./package.json').version)

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Polychroma',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', meta: 'description', content: 'Generate better CSS gradients using alternative colour spaces & Bezier interpolation.' },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css' },
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
                include: [
                    '/node_modules/vue-color',
                ],
            })
        },
    },

    env: {
        version: versionNum,
    },

    plugins: [
        // new webpack.DefinePlugin({
        //     VERSION: JSON.stringify(require('./package.json').version)
        // }),

        // { src: '~plugins/vue-color.js' },
        { src: '~plugins/analytics.js', ssr: false },
    ],
}
