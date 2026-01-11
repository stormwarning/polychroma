import { useGradientStore } from '~/stores/gradient'

export default defineNuxtRouteMiddleware((to) => {
  const path = to.path

  // Match pattern: /mode/{mode}/start/{color}/end/{color}/angle/{angle}
  const re = /\/mode\/([a-z]+)\/start\/([a-z0-9]+)\/end\/([a-z0-9]+)\/angle\/(\d+)/
  const match = path.match(re)

  if (match) {
    const store = useGradientStore()

    store.changeMode(match[1])
    store.changeColor({ color: `#${match[2]}`, stop: 0 })
    store.changeColor({ color: `#${match[3]}`, stop: 1 })
    store.rotate(match[4])

    // Redirect to home page
    return navigateTo('/', { replace: true })
  }
})
