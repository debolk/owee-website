<template>
  <div class="programma">

    <div class ="container">

        <div class="days" :id="dag">
           <div v-for="item of vandaag"
           v-bind:style="{ height: `${Math.max(timeToPx(item.end)-timeToPx(item.start), 30)}px`, top: `${timeToPx(item.start)}px` }"
           v-bind:class="{ 'leftevent': item.lokatie === 'links', 'rightevent': item.lokatie === 'rechts' }"
           class="event">

             <span class="title">{{item.titel}}</span>
             <span class="time">
               {{`${Math.floor(item.start/100)}:${pad(item.start%100,2 )} - ${Math.floor(item.end/100)}:${pad(item.end%100,2 )}`}}
             </span>
           </div>

        </div>

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
      begintijd: programma[this.dag].begintijd
    }
  },

  methods: {
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

.container {
  height:100%;
  width: 100%;
  display: inline-flex;
  position: relative;
}

.timings {
  text-align: right;
  padding-right: 10px;
  width: 100px;
  height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  font-size: 0.5em;
  box-sizing: border-box
}

.timings span {
  font-size: 200%;
  color: black;
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
  width: 100%;
  padding: -5px;
  background-color: #add8e6;
  border-style: solid;
  border-width: 1px;
  border-left-width: 5px;
  border-color: purple;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 5px;
  position: absolute;
  font-size: 0.5em;
  box-sizing: border-box;
}

.event:hover{
  background-color: purple;
}

.event .title {
  color: black;
  font-size: 200%;
}

body{
  margin: none;
}


</style>
