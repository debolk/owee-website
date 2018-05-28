<template>
  <div>
    <div class="flexcontainer">

      <programmas dag="woensdag"></programmas>
    </div>
  </div>
</template>

<script>
  import programmas from '~/components/programmas.vue'

  export default {
    components: {
      programmas
    }
  }
</script>

<style>

body{
  margin: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.flexcontainer {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   width: 100%;
}

.programma{
  width: 33%;
}
</style>
