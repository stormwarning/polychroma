const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.ts',
    ],

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

        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },

        extend: {
            boxShadow: {
                a:
                    '0 2px 10px rgba(0, 0, 0, 0.12), 0 20px 50px 0 rgba(0, 0, 0, 0.14)',
                b:
                    '0 2px 10px rgba(0, 0, 0, 0.12), 0 50px 50px 0 rgba(0, 0, 0, 0.1)',
            },

            colors: {
                grey: {
                    100: '#f1f2f2',
                    200: '#e7ebed',
                    300: '#dee4e8',
                    400: '#c0c8cd',
                    500: '#949ca1',
                    600: '#62696d',
                    700: '#393e41',
                    800: '#202326',
                    900: '#16191b',
                },
            },

            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },

            inset: {
                8: '2rem',
            },

            letterSpacing: {
                mega: '0.25em',
            },

            typography: {
                DEFAULT: {
                    css: {
                        code: {
                            padding: '0.1875rem 0.25rem',
                            margin: '0 1px',
                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                            borderRadius: '0.125rem',
                        },
                        'code::before': { content: 'none' },
                        'code::after': { content: 'none' },
                    },
                },
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        // require('tailwindcss-capsize').default({}),
    ],
}
