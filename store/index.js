import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            version: () => process.env.VERSION,
            colorMode: 'lab',
        },
        mutations: {},
    })
}

export default createStore
