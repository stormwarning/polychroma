const dispatch = require('micro-route/dispatch')
const nuxt = require('./nuxt.index.js')


module.exports = async (req, res) => {
    await dispatch()
        .dispatch('*',
            ['GET'],
            async (req, res) => await nuxt.render(req, res))(req, res)
}
