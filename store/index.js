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
    rotate(state, direction) {
        state.direction = direction
    },

    changeMode(state, mode) {
        state.colorMode = mode
    },

    changeColor(state, { color, stop }) {
        state.colorStops[stop].color.hex = color
    },
}

export const actions = {
    rotate({ commit }, direction) {
        commit('rotate', direction)
    },
}
