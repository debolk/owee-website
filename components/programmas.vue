<template>
  <div class="programma">

    <div class ="container">

        <div class="days" :id="dag">
           <div v-for="(item, index) of vandaag"
           :key="index"
           v-bind:style="{ height: `${Math.max((timeToPx(item.end)-timeToPx(item.start))*grow, 40)}px`, top: `${(timeToPx(item.start)*grow)}px` }"
           v-bind:class="{ 'leftevent': item.lokatie === 'links', 'rightevent': item.lokatie === 'rechts' }"
           class="event"
           @click="openmodal(item)">
             <div class="textcontainer">
               <span class="title fitTitle">{{item.titel[$cookie.get('language')]}}</span>
               <br/>
               <span v-if="!!item.neptijd" class="time fitTime">
                 {{`${item.nepstart} - ${item.nepend}`}}
               </span>
               <span v-else class="time fitTime">
                 {{`${Math.floor(item.start/100)}:${pad(item.start%100,2 )} - ${Math.floor(item.end/100)}:${pad(item.end%100,2 )}`}}
               </span>
             </div>
           </div>
        </div>

    </div>

    <div class="modal" v-bind:class="{ 'is-active': modal }">
      <div class="modal-background" @click="modal = false"></div>
      <div class="modal-content">
        <div class="modaltitle">
          {{modalItem.titel[$cookie.get('language')]}}
        </div>
          <span v-if="!!modalItem.neptijd" class="time">
            {{`${modalItem.nepstart} - ${modalItem.nepend}`}}
          </span>
          <span v-else class="time">
            {{`${Math.floor(modalItem.start/100)}:${pad(modalItem.start%100,2 )} - ${Math.floor(modalItem.end/100)}:${pad(modalItem.end%100,2 )}`}}
          </span>
          <br/>
          <p v-html="modalItem.beschrijving[$cookie.get('language')]"></p>
      </div>
      <button class="modal-close is-large" @click="modal = false"></button>
    </div>

  </div>
</template>

<script>
import programma from '~/assets/programma'

export default {
  props: {
    dag: String
  },

  data() {
    return {
      vandaag: programma[this.dag].planning,
      modal: false,
      modalItem: {
        titel: {},
        beschrijving: {}
      },
    }
  },

  mounted(){
    fitty('.fitTitle', {
      minSize: 10,
      maxSize: 20,
      multiline: true
    })
    fitty('.fitTime', {
      minSize: 10,
      maxSize: 11,
      multiline: false
    })
  },

  computed: {
    grow(){
      return this.$mq === 'mobile' ? 1.4 : 1.4
    },
    begintijd: function(){
      if(this.$mq === 'mobile'){
        return programma[this.dag].begintijd;
      }
      let s = Number.MAX_SAFE_INTEGER;
      for(let i in programma){
        s = Math.min(programma[i].begintijd, s);
      }
      return s;
    }
  },

  methods: {
    openmodal(item){
      this.modalItem = item;
      this.modal = true;
    },
    pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    },
    timeToPx(time){
      var b = new Date(0, 0, 0, Math.floor(this.begintijd/100), this.begintijd%100, 0)
      var d = 0;
      if(time < 1000){
        d = 1;
      }
      var t = new Date(0, 0, d, Math.floor(time/100), time%100, 0)
      var diff = Math.abs(b - t)/60000
      return diff
    }
  }

}
</script>

<style>

.modal-content{
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
}

.textcontainer{
  width: calc(100% - 10px);
  position: relative;
  left: 5px;
  display: block;
}

.fitTitle{
  height: 25px;
  padding-bottom: 0px !important;
}

.modal-content .modaltitle{
  font-size: 1.8rem;
}

.modal-background{
  opacity: .7;
}

.container {
  height:100%;
  width: 100%;
  display: inline-flex;
  position: relative;
}

.time{
  font-size: .8rem;
}

.days{
  width: 100%;
}

.leftevent {
  left: 0%;
  width: 50% !important;
}

.rightevent {
  left: 50%;
  width: 50% !important;
}

.event {
  cursor: pointer;
  width: 100%;
  background-color: #af74e8;
  border: 2px solid #32fced;
  border-radius: 10px;
  position: absolute;
  font-size: 0.25em;
  box-sizing: border-box;
  transition: 0.2s ease all;
  overflow: hidden;
  display: flex;
  justify-content:center;
  align-content:center;
  flex-direction:column;
  word-break: keep-all;
}

.event:hover{
  background-color: #32fced;
  border: 2px solid #af74e8;
}

.event .title {
  color: #af46e8;
  font-size: 1rem;
  margin-bottom: -20px !important;
}

.event .time{
  color: white;
}

.event:hover .title{
  color: #201F58;
}

.event:hover .time{
  color: gray;
}

body{
  margin: none;
}


</style>
