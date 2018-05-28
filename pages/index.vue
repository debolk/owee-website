<template>
  <div>
    <navbar></navbar>
    <imageheader></imageheader>
    <maintext></maintext>
    <vereniging></vereniging>
    <schema></schema>
    <kmt></kmt>
    <sleepin></sleepin>
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
  import sleepin from '~/pages/sleepin.vue'
  import contact from '~/pages/contact.vue'
  import navbar from '~/pages/navbar.vue'

  export default {
    components: {
      imageheader,
      quotes,
      vereniging,
      schema,
      maintext,
      kmt,
      sleepin,
      contact,
      navbar
    }
  }
</script>

<style>

body{
  margin: none;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 500;
}

html{
  font-size: 16px;
}

h1, h2{
  text-align: center;
  color: white !important;
  font-family: 'Fredoka One', cursive;
  font-size: 3rem !important;
}

p{
  font-size: 1rem;
}

.content{
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
}

</style>
