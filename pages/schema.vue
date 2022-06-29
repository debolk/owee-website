<template>
  <div id="schema">
    <div class="content">

      <h2 v-if="$cookie.get('language') == 'dutch'">wat is er te doen tijdens de owee?</h2>
      <h2 v-if="$cookie.get('language') == 'english'">what is there to do during the owee?</h2>
	  

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

.mobiledagcontainerparent{
  height: 500px !important;
}

.mobiledagcontainer{
  position: relative;
}

#schema{
  background-color: #af74e8;
  font-family: Bierstadt Bold;
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

</style>
