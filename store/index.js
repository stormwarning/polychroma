export const state = () => ({
    version: process.env.VERSION,
    colorMode: 'lab',
    direction: 30,
})

export const mutations = {
    rotate(state, direction) {
        state.direction = direction
    },
}
