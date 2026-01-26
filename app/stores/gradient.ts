import { defineStore } from 'pinia'

interface ColorStop {
  color: {
    hex: string
  }
}

interface GradientState {
  colorMode: string
  colorStops: [ColorStop, ColorStop]
  direction: number
}

export const useGradientStore = defineStore('gradient', {
  state: (): GradientState => ({
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
  }),

  actions: {
    changeMode(mode: string) {
      this.colorMode = mode
    },

    rotate(direction: number | string) {
      this.direction = Number.parseInt(String(direction), 10)
    },

    changeColor({ color, stop }: { color: string; stop: number }) {
      this.colorStops[stop]!.color.hex = color
    },
  },
})
