<template>
  <div id="schema">
    <div class="content">

      <h2 v-if="$cookie.get('language') == 'dutch'">Wat is er te doen tijdens de OWee?</h2>
      <h2 v-if="$cookie.get('language') == 'english'">What is there to do during the OWee?</h2>

      <div class="columns">
        <div class="column column-left">
          <div class="columns is-mobile">
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][0]}}</h3>
                <programmas dag="vrijdag" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }"></programmas>
              </div>
            </div>
          </div>
        </div>
        <div class="column column-middle">
          <div class="columns is-mobile">
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][1]}}</h3>
                <programmas dag="zaterdag"></programmas>
              </div>
            </div>
          </div>
        </div>
        <div class="column column-right">
          <div class="columns is-mobile">
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][2]}}</h3>
                <programmas dag="zondag"></programmas>
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
  data(){
    return{
      dagen: {
        dutch: ['Vrijdag', 'Zaterdag', 'Zondag'],
        english: ['Friday', 'Saturday', 'Sunday']
      }
    }
  },

  components: {
    programmas
  }
}

</script>

<style>

.mobiledagcontainerparent{
  height: 1000px !important;
}

.mobiledagcontainer{
  position: relative;
  top: -250px;
}

#schema{
  background-color: #ee7730;
  padding: 100px 0px;
  position: relative;
}

#schema h2{
  color: #045a8f !important;
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
  background-image: url('~assets/triangle-blue.svg');
  background-size: contain;
}

.dagcontainer{
  text-align: center;
  width: 100%;
  height: 1400px;
}

.dagcontainer h3{
   color: #045a8f;
}
</style>
