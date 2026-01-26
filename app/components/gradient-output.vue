<template>
  <figure :style="{ backgroundImage: gradientCSS }" class="m-0">
    <div class="hidden lg:block w-full max-w-lg">
      <pre
        :class="$style.source"
        class="px-8 py-16 m-0 text-sm whitespace-normal lowercase"
      >
        <code>{{ gradientCSS }}</code>
      </pre>
    </div>

    <div class="flex items-end justify-end px-8 py-16">
      <BaseButton @click="copyCSS">
        <svg
          class="relative w-4 h-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
        <span class="relative ml-1 lg:ml-2 leading-none">
          {{ copyButtonText }}
        </span>
      </BaseButton>
      <BaseButton class="ml-4" @click="shareURL">
        <svg
          class="relative w-4 h-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          />
          <path
            d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          />
        </svg>
        <span class="relative ml-1 lg:ml-2 leading-none">
          {{ shareButtonText }}
        </span>
      </BaseButton>
    </div>
  </figure>
</template>

<script setup lang="ts">
import chroma from 'chroma-js'
import { computed, onMounted, ref } from 'vue'

import { useGradientStore } from '~/stores/gradient.js'
import { copyTextToClipboard } from '~/utils/clipboard.js'

const COPY_LABEL = 'Copy CSS'
const SHARE_LABEL = 'Share URL'

const store = useGradientStore()

const copyButtonText = ref(COPY_LABEL)
const shareButtonText = ref(SHARE_LABEL)
const origin = ref('')

const gradientCSS = computed(() => {
  /** @todo Rename the store property as well. */
  let angle = `${store.direction}deg`
  let stops = store.colorStops
  let mode = store.colorMode
  let steps = mode === 'rgb' ? stops.length : stops.length + 5
  let string = 'linear-gradient('
  let keyColors: string[] = []

  for (let stop of stops) keyColors.push(stop.color.hex)
  let scale = chroma.scale(keyColors).mode(mode).correctLightness()
  let colors: string[] = []
  let positions: number[] = []

  for (let [index, _] of Array.from({ length: steps }).entries()) {
    let t = index / (steps - 1)
    colors.push(scale(t).hex())
    positions.push(Math.floor(t * 100))
  }

  return `${string}${angle}${colors
    .map((stop, index) => `, ${stop} ${positions[index]}%`)
    .join('')})`
})

onMounted(() => {
  if (import.meta.client) {
    origin.value = globalThis.location.origin
  }
})

function copyCSS() {
  copyTextToClipboard(gradientCSS.value)
  copyButtonText.value = 'Copied!'
  setTimeout(() => {
    copyButtonText.value = COPY_LABEL
  }, 2000)
}

function shareURL() {
  let mode = store.colorMode
  let angle = store.direction
  let stops = store.colorStops
  let start = stops[0].color.hex.replace('#', '')
  let end = stops.at(-1)?.color.hex.replace('#', '')
  let string_ = `/mode/${mode}/start/${start}/end/${end}/angle/${angle}`

  copyTextToClipboard(origin.value + string_)
  shareButtonText.value = 'Copied!'
  setTimeout(() => {
    shareButtonText.value = SHARE_LABEL
  }, 2000)
}
</script>

<style lang="postcss" module>
figure {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  padding-top: 8.5rem;
}

.source {
  mix-blend-mode: color-burn;
  opacity: 0.75;

  & code {
    line-height: 2;
  }
}
</style>
