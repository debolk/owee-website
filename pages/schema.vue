<template>
  <div id="schema">
    <div class="content">
      <h2>Wat is er te doen tijdens de OWee?</h2>
      <div class="columns">
        <div class="column column-left">
          <div class="columns is-mobile">
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }">
                <programmas dag="maandag"></programmas>
              </div>
            </div>
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }">
                <programmas dag="dinsdag"></programmas>
              </div>
            </div>
          </div>
        </div>
        <div class="column column-right">
          <div class="columns is-mobile">
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }">
                <programmas dag="woensdag"></programmas>
              </div>
            </div>
            <div class="column">
              <div class="dagcontainer">
                <programmas dag="donderdag"></programmas>
              </div>
            </div>
          </div>
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
}

.column{
  padding: 3px;
}

.column-left{
  padding-left: 0px;
}

.column-right{
  padding-right: 0px;
}

.columns{
  padding: 2px;
  margin: -5px;
}

.maintriangles{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-image: url('~/assets/triangle-blue.svg');
  background-size: contain;
}

.dagcontainer{
  text-align: center;
  width: 100%;
  height: 1350px;
}

.mobiledagcontainer{
  height: 1100px;
}

.dagcontainer h3{
   color: #87eebf;
}
</style>
