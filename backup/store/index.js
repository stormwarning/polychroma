export const state = () => ({
    version: process.env.VERSION,
    colorMode: 'lab',
    direction: 30,
    colorStops: [
        {
            color: {
                hex: '#000080',
            },
        },
        {
            color: {
                hex: '#ffff00',
            },
        },
    ],
})

export const mutations = {
    CHANGE_ANGLE(state, direction) {
        state.direction = direction
    },

    CHANGE_MODE(state, mode) {
        state.colorMode = mode
    },

    CHANGE_STOP(state, { color, stop }) {
        state.colorStops[stop].color.hex = color
    },
}

export const actions = {
    changeMode({ commit }, mode) {
        return new Promise((resolve) => {
            commit('CHANGE_MODE', mode)
            resolve()
        })
    },

    rotate({ commit }, direction) {
        commit('CHANGE_ANGLE', Number.parseInt(direction))
    },

    changeColor({ commit }, { color, stop }) {
        commit('CHANGE_STOP', { color, stop })
    },
}
