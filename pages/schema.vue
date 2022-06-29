<template>
  <div id="schema">
    <div class="content">

      <h2 v-if="$cookie.get('language') == 'dutch'">Wat is er te doen tijdens de OWee?</h2>
      <h2 v-if="$cookie.get('language') == 'english'">What is there to do during the OWee?</h2>
	  <div class="subtitle">
		<h3 v-if="$cookie.get('language') == 'dutch'">N.B. Dit programma is onder voorbehoud.</h3>
		<h3 v-if="$cookie.get('language') == 'english'">N.B. This programm is not final.</h3>
	  </div>
	  

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
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][2]}}</h3>
                <programmas dag="dinsdagvrijdag" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }"></programmas>
              </div>
            </div>
			
          </div>
        </div>
      </div>
	  
	  <div class="subtitle">
	    <h4 v-if="$cookie.get('language') == 'dutch'">Er zijn elke dag ook bord- en retrospelletjes beschikbaar</h4>
		<h4 v-if="$cookie.get('language') == 'english'">We also have board- and retrogames available every day</h4>
	  </div>
	  
	  <a href="https://reserveren.debolk.nl" class="button2">
        <span v-if="$cookie.get('language') == 'dutch'">Schrijf je hier in voor activiteiten</span>
        <span v-if="$cookie.get('language') == 'english'">You can register here for an activity</span>
      </a>
	  
    </div>
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

.button2{
	width: 100%;
	display: block;
	text-align: center;
}

.button2 span{
	color: #32fced;	
}

.button2 span:hover{
	color: white;
}

.mobiledagcontainerparent{
  height: 500px !important;
}

.mobiledagcontainer{
  position: relative;
}

#schema{
  background-color: #af74e8;
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

.dagcontainer{
  text-align: center;
  width: 100%;
  height: 500px;
}

.dagcontainer h3{
   color: white;
}

.subtitle h4{

  color: #32fced;
  text-align:center;
  
}

.subtitle h3{

  color: #32fced;
  text-align:center;
  
}

</style>
