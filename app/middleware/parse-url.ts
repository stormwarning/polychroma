import { useGradientStore } from '~/stores/gradient.js'

import { defineNuxtRouteMiddleware, navigateTo } from '#imports'

export default defineNuxtRouteMiddleware((to) => {
  let { path } = to

  // Match pattern: /mode/{mode}/start/{color}/end/{color}/angle/{angle}
  let re =
    /\/mode\/([a-z]+)\/start\/([a-z0-9]+)\/end\/([a-z0-9]+)\/angle\/(\d+)/
  let match = path.match(re)

  if (match) {
    let store = useGradientStore()

    store.changeMode(match[1])
    store.changeColor({ color: `#${match[2]}`, stop: 0 })
    store.changeColor({ color: `#${match[3]}`, stop: 1 })
    store.rotate(match[4])

    // Redirect to home page
    return navigateTo('/', { replace: true })
  }
})
