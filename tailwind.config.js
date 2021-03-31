const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: {
        // https://tailwindcss.com/docs/upcoming-changes#remove-deprecated-gap-utilities
        removeDeprecatedGapUtilities: true,
        // https://tailwindcss.com/docs/upcoming-changes#purge-layers-by-default
        purgeLayersByDefault: true,
    },

    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ],
    },

    theme: {
        fontMetrics: {
            sans: {
                capHeight: 2048,
                ascent: 2728,
                descent: -680,
                lineGap: 0,
                unitsPerEm: 2816,
            },
        },

        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },

            inset: {
                8: '2rem',
            },

            letterSpacing: {
                mega: '0.25em',
            },
        },
    },

    plugins: [
        require('tailwindcss-typography'),
        require('tailwindcss-capsize'),
    ],
}
