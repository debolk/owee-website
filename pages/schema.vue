<template>
  <div id="schema">
    <div class="content">

      <h2 v-if="$cookie.get('language') == 'dutch'">WAT IS ER TE DOEN TIJDENS DE OWEE?</h2>
      <h2 v-if="$cookie.get('language') == 'english'">WHAT IS THERE TO DO DURING THE OWEE?</h2>
	  

      <div class="columns">
        <div class="column">
          <div class="columns">
            
			<div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][0]}}</h3>
                <programmas dag="maandag" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }"></programmas>
              </div>
            </div>
			
            <div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][1]}}</h3>
                <programmas dag="dinsdag" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }"></programmas>
              </div>
            </div>
			
			<div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][2]}}</h3>
                <programmas dag="woensdag" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }"></programmas>
              </div>
            </div>
			
			<div class="column">
              <div class="dagcontainer" v-bind:class="{ 'mobiledagcontainerparent': $mq === 'mobile' }">
                <h3>{{dagen[$cookie.get('language')][3]}}</h3>
                <programmas dag="donderdag" v-bind:class="{ 'mobiledagcontainer': $mq === 'mobile' }"></programmas>
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
        dutch: ['maandag', 'dinsdag', 'woensdag', 'donderdag'],
        english: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
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
  height: 1200px !important;
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
  height: 1100px;
}

.dagcontainer h3{
   color: white;
}

</style>
