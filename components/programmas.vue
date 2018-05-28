<template>
  <div class="programma">

    <div class ="container">

      <div class="days" :id="dag">
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
      vandaag: programma[this.dag],
    }
  },

  mounted(){

    const containerHeight = 720;
    const minutesinDay = 60 * 12;
    let collisions = [];
    let width = [];
    let leftOffSet = [];

    // append one event to calendar
    var createEvent = (height, top, left, units, event, beginHour) => {

      let d = new Date(0, 0, 0, beginHour, 0, 0, 0)
      let start = new Date(d.getTime() + (event.start * 60 * 1000))
      let end = new Date(d.getTime() + (event.end * 60 * 1000))

      let node = document.createElement("DIV");
      node.className = "event";
      node.innerHTML = `<span class='title'>${event.titel}</span>  `;
      node.innerHTML += `${this.pad(start.getHours(), 2)}:${this.pad(start.getMinutes(), 2)} - `
      node.innerHTML += `${this.pad(end.getHours(), 2)}:${this.pad(end.getMinutes(), 2)}`

      // Customized CSS to position each event
      node.style.height = height + "px";
      node.style.top = top + "px";
      node.style.left = "100px"
      if(event.lokatie === "links" || event.lokatie === "rechts"){
        node.className += " halfevent"
      }
      if(event.lokatie === 'rechts'){
        node.style.left = "50%"
      } else {
        node.style.left = "0px"
      }

      document.getElementById(this.dag).appendChild(node);
    }

    /*
    collisions is an array that tells you which events are in each 30 min slot
    - each first level of array corresponds to a 30 minute slot on the calendar
      - [[0 - 30mins], [ 30 - 60mins], ...]
    - next level of array tells you which event is present and the horizontal order
      - [0,0,1,2]
      ==> event 1 is not present, event 2 is not present, event 3 is at order 1, event 4 is at order 2
    */

    function getCollisions (events) {

      //resets storage
      collisions = [];

      for (var i = 0; i < 26; i ++) {
        var time = [];
        for (var j = 0; j < events.length; j++) {
          time.push(0);
        }
        collisions.push(time);
      }

      events.forEach((event, id) => {
        let end = event.end;
        let start = event.start;
        let order = 1;

        while (start < end) {
          let timeIndex = Math.floor(start/30);

          while (order < events.length) {
            if (collisions[timeIndex].indexOf(order) === -1) {
              break;
            }
            order ++;
          }

          collisions[timeIndex][id] = order;
          start = start + 30;
        }

        collisions[Math.floor((end-1)/30)][id] = order;
      });
    };

    /*
    find width and horizontal position

    width - number of units to divide container width by
    horizontal position - pixel offset from left
    */
    function getAttributes (events) {

      //resets storage
      width = [];
      leftOffSet = [];

      for (var i = 0; i < events.length; i++) {
        width.push(0);
        leftOffSet.push(0);
      }

      collisions.forEach((period) => {

        // number of events in that period
        let count = period.reduce((a,b) => {
          return b ? a + 1 : a;
        })

        if (count > 1) {
          period.forEach((event, id) => {
            // max number of events it is sharing a time period with determines width
            if (period[id]) {
              if (count > width[id]) {
                width[id] = count;
              }
            }

            if (period[id] && !leftOffSet[id]) {
              leftOffSet[id] = period[id];
            }
          })
        }
      });
    };

    var layOutDay = (events, beginHour) => {

    // clear any existing nodes
    var myNode = document.getElementById(this.dag);
    myNode.innerHTML = '';

      getCollisions(events);
      getAttributes(events);

      events.forEach((event, id) => {
        let height = (event.end - event.start) / minutesinDay * containerHeight;
        if(height < 30){
          height = 30;
        }
        let top = event.start / minutesinDay * containerHeight;
        let end = event.end;
        let start = event.start;
        let units = width[id];
        if (!units) {units = 1};
        let left = 0;
        if (!left || left < 0) {left = 10};
        createEvent(height, top, left, units, event, beginHour);
      });
    }

    if(this.dag === "donderdag"){
      layOutDay(this.vandaag, 12)
    } else {
      layOutDay(this.vandaag, 16)
    }

  },

  methods: {
    pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
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

.halfevent{
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
