import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 770,
    twocards: 1000,
    navbar: 1088,
    threecards: 1300,
    fourcards: 1500,
    desktop: Infinity,
  }
})
