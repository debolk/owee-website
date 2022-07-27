<template>
  <div>
	<div class="soosjes-links" v-if="!$isMobile()"></div>
	<div class="soosjes-rechts" v-if="!$isMobile()"></div>
	<navbar></navbar>
	<imageheader></imageheader>
		<div class="triangles-primary"></div>
	<maintext></maintext>
		<div class="triangles-secondary"></div>
	<vereniging></vereniging>
		<div class="triangles-primary"></div>
	<schema></schema>
		<div class="triangles-secondary"></div>
	<sleepin></sleepin>
		<div class="triangles-primary"></div>
	<kmt></kmt>
		<div class="triangles-secondary"></div>
	<quotes></quotes>
		<div class="triangles-primary"></div>
	<contact></contact>
  </div>
</template>

<script>
  import imageheader from '~/pages/imageheader.vue'
  import quotes from '~/pages/quotes.vue'
  import vereniging from '~/pages/vereniging.vue'
  import maintext from '~/pages/maintext.vue'
  import schema from '~/pages/schema.vue'
  import sleepin from '~/pages/sleepin.vue'
  import kmt from '~/pages/kmt.vue'
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
      contact,
      navbar,
	  sleepin
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
  max-width: 100vw;
  position: relative;
}

body {
  height: 100%;
  width: 100%;
}

.triangles-primary{
  height: 18px;
  width: 100%;
  position: relative;
  z-index: 1;
  margin-top: -18px;
  background-image: url('~assets/triangle-primary.svg');
  background-size: contain;
}

.triangles-secondary{
  height: 18px;
  width: 100%;
  position: relative;
  z-index: 1;
  margin-top: -18px;
  background-image: url('~assets/triangle-secondary.svg');
  background-size: contain;
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
  font-family: 'BTTF', sans-serif !important;
  font-weight: 500;
}

html{
  font-size: 16px;
}

@font-face {
  font-family: 'BTTF';
  src: url('/fonts/BTTF.ttf') format('truetype');
}

@font-face {
  font-family: 'Bierstadt Bold Italic';
  src: url('/fonts/BIERSTADT_BI.ttf') format('truetype');
}

@font-face {
  font-family: 'Bierstadt Bold';
  src: url('/fonts/BIERSTADT_B.ttf') format('truetype');
}

h1, h2{
  text-align: center;
  color: white !important;
  font-family: 'BTTF';
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