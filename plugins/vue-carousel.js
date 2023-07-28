import {Carousel, Slide} from 'vue3-carousel'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Carousel)
  nuxtApp.vueApp.use(Slide)
})
