import VueMq from 'vue3-mq'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueMq, {
    breakpoints: {
      mobile: 770,
      twocards: 1000,
      navbar: 1088,
      threecards: 1300,
      fourcards: 1500,
      desktop: Infinity,
    }})
})
