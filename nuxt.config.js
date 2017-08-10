module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Polychroma',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', meta: 'description', content: 'Nuxt.js project' },
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

    /*
    ** Add axios globally
    */
    build: {
        vendor: ['axios'],
    },
}
