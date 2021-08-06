<template>
  <div id="schema">
    <div class="content">

      <h2 v-if="$cookie.get('language') == 'dutch'">Wat is er te doen tijdens de OWee?</h2>
      <h2 v-if="$cookie.get('language') == 'english'">What is there to do during the OWee?</h2>
	  <h3 v-if="$cookie.get('language') == 'dutch'" style="color:#201F58;position:relative;text-align:center;">N.B. Dit programma is onder voorbehoud.</h3>
	  <h3 v-if="$cookie.get('language') == 'english'" style="color:#201F58;position:relative;text-align:center;">N.B. This programm is not final.</h3>
	  

      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][0]}}</h3>
                <programmas dag="zondagwoensdag" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }"></programmas>
              </div>
            </div>
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][1]}}</h3>
                <programmas dag="maandagdonderdag" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }"></programmas>
              </div>
            </div>
			
			      <div class="column">
              <div class="dagcontainer">
                <h3>{{dagen[$cookie.get('language')][2]}}</h3>
                <programmas dag="dinsdagvrijdag"></programmas>
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
        dutch: ['zondag/woensdag', 'maandag/donderdag', 'dinsdag/vrijdag'],
        english: ['Sunday/Wednesday', 'Monday/Thursday', 'Tuesday/Friday']
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
  height: 500px !important;
}

.mobiledagcontainer{
  position: relative;
}

#schema{
  background-color: #63d6ed;
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
  background-image: url('~assets/triangle-secondary.svg');
  background-size: contain;
}

.dagcontainer{
  text-align: center;
  width: 100%;
  height: 400px;
}

.dagcontainer h3{
   color: white;
}

</style>
