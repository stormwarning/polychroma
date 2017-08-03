const dispatch = require('micro-route/dispatch')
const {send} = require('micro')
const {getUser, getUsers} = require('./api/')
const nuxt = require('./nuxt.index.js')


module.exports = async (req, res) => {
    await dispatch()
        .dispatch('/api/users/:id',
            ['GET'],
            async (req, res, {params, query}) => send(res, 200, await getUser(params.id)))
        .dispatch('/api/users',
            ['GET'],
            async (req, res) => send(res, 200, await getUsers()))
        .dispatch('*',
            ['GET'],
            async (req, res) => await nuxt.render(req, res))(req, res)
}
