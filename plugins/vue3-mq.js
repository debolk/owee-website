import { Vue3Mq } from 'vue3-mq'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Vue3Mq, {
    defaultBreakpoint: "desktop",
    breakpoints: {
      mobile: 0,
      twocards: 770,
      threecards: 1088,
      fourcards: 1300,
      desktop: 1500,
    }});
})
