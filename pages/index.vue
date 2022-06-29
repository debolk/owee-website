<template>
  <div>
	<div class="soosjes-links" v-if="!$isMobile()"></div>
	<div class="soosjes-rechts" v-if="!$isMobile()"></div>
	<navbar></navbar>
	<imageheader></imageheader>
	<maintext></maintext>
	<vereniging></vereniging>
	<schema></schema>
	<kmt></kmt>
	<covid19></covid19>
	<quotes></quotes>
	<contact></contact>
  </div>
</template>

<script>
  import imageheader from '~/pages/imageheader.vue'
  import quotes from '~/pages/quotes.vue'
  import vereniging from '~/pages/vereniging.vue'
  import maintext from '~/pages/maintext.vue'
  import schema from '~/pages/schema.vue'
  import kmt from '~/pages/kmt.vue'
  import covid19 from '~/pages/covid-19.vue'
  import contact from '~/pages/contact.vue'
  import navbar from '~/pages/navbar.vue'

  import VueMobileDetection from 'vue-mobile-detection'
  import Vue from 'vue'
  Vue.use(VueMobileDetection)

  export default {
    components: {
      imageheader,
      quotes,
      vereniging,
      schema,
      maintext,
      kmt,
      covid19,
      contact,
      navbar
    },

    beforeCreate(){
      //set cookie if none
      if(this.$cookie.get('language') != 'dutch' && this.$cookie.get('language') != 'english'){
        this.$cookie.set('language', 'dutch', '100')
      }
    }
  }
  
</script>

<style>

html {
  min-height: 100%;
  min-width: 100%;
  position: relative;
}

body {
  height: 100%;
  width: 100%;
}

.soosjes-links{
  height: 100%;
  width: 50px;
  position: absolute;
  left: 10px;
  top: 0px;
  z-index: 2;
  overflow: hidden;
  background-image: url('~assets/soos.svg');
  background-repeat: repeat-y;
}

.soosjes-rechts{
  height: 100%;
  width: 50px;
  position: absolute;
  left: calc(100% - 60px);
  top: 0px;
  z-index: 2;
  overflow: hidden;
  background-image: url('~assets/soos.svg');
  background-repeat: repeat-y;
}

body{
  margin: none;
  font-family: 'Bierstadt Bold', sans-serif !important;
  font-weight: 500;
}

html{
  font-size: 16px;
}

@font-face {
  font-family: 'Bierstadt Bold';
  src: url('/fonts/BIERSTADT_B.ttf') format('truetype')
}

@font-face {
  font-family: 'Bierstadt Bold Italic';
  src: url('/fonts/BIERSTADT_BI.ttf') format('truetype')
}

h1, h2{
  text-align: center;
  color: white !important;
  font-family: 'Bierstadt Bold Italic';
  font-size: 3rem !important;
}

p{
  font-size: 1rem;
}

.content{
  max-width: 960px;
  margin: 0 auto;
  padding: 0 29px;
}

</style>