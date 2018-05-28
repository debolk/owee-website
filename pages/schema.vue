<template>
  <div id="schema">
    <div class="content">
      <h2>Wat is er te doen tijdens de OWee?</h2>
      <div class="flexcontainer">
        <div class="dagcontainer">
          <h3>maandag</h3>
          <programmas dag="maandag"></programmas>
        </div>
        <div class="dagcontainer">
          <h3>dinsdag</h3>
          <programmas dag="dinsdag"></programmas>
        </div>
        <div class="dagcontainer">
          <h3>woensdag</h3>
          <programmas dag="woensdag"></programmas>
        </div>
        <div class="dagcontainer">
          <h3>donderdag</h3>
          <programmas dag="donderdag"></programmas>
        </div>
      </div>
    </div>
    <div class="upsidedowntriangles"></div>
  </div>
</template>

<script>
import programmas from '~/components/programmas.vue'

export default{
  components: {
    programmas
  }
}

</script>

<style>

#schema{
  background-color: #8700a0;
  padding: 100px 0px;
  position: relative;
  height: 1600px;
}

.maintriangles{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-image: url('~/assets/triangle-blue.svg');
  background-size: contain;
}

.flexcontainer {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   width: 100%;
}

.dagcontainer{
  text-align: center;
  width: 25%;
  padding: 0 5px;
}

.dagcontainer h3{
   color: #87eebf;
}
</style>
