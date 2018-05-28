<template>
  <div>
    <imageheader></imageheader>
    <quotes></quotes>
    <!-- <div class="flexcontainer">
      <programmas dag="maandag"></programmas>
      <programmas dag="dinsdag"></programmas>
      <programmas dag="woensdag"></programmas>
      <programmas dag="donderdag"></programmas>
    </div> -->
  </div>
</template>

<script>
  import programmas from '~/components/programmas.vue'
  import imageheader from '~/pages/imageheader.vue'
  import quotes from '~/pages/quotes.vue'

  export default {
    components: {
      programmas,
      imageheader,
      quotes
    }
  }
</script>

<style>

body{
  margin: none;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 400;
}

html{
  font-size: 16px;
}

h2{
  text-align: center;
  color: white !important;
  font-family: 'Fredoka One', cursive;
  font-size: 3rem !important;
}

p{
  font-size: 1rem;
}

.content{
  max-width: 1000px;
  margin: 0 auto;
}

.flexcontainer {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   width: 100%;
}

.programma{
  width: 25%;
}
</style>
