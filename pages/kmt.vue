<script setup>
import { useMq } from "vue3-mq";

const mq = useMq();
const language = useCookie("language", {maxAge: 100 * 24 * 60 * 60, default: () => { return "dutch" }});
</script>

<template>
  <div id="kmt">

    <div v-if="language == 'dutch'" class="content">
      <h2>WAT IS DE KMT?</h2>
      <p>Een weekje op kamp en zeilen met je toekomstige jaargenoten. Lijkt jou dat leuk? Kom dan mee op onze kennismakingstijd!</p>
      <p>Bij ons is de KMT een leuk, extra weekje vakantie, zonder verplichtingen en geen ontgroening. Dit is het moment om verder kennis te maken met De Bolk en jouw jaargang goed te leren kennen. Er zijn geen verplichtingen aan je jaargang, het zal wel een groep mensen zijn die dezelfde ervaringen voor het eerst met jou mee zullen maken.</p>
      <p>De eerste keer samen een groot feest organiseren, de eerste keer doorzakken tot 5 uur op De Bolk, samen strijden om je BSA te halen: allemaal ervaringen die je met je jaargenoten door zal maken. Je zal ook De Bolk verder leren kennen, de oudere leden die je zullen helpen commissies te vormen, het bestuur dat er altijd is om jouw vragen te beantwoorden, de oude lullen waarmee je altijd over alles kan zeuren tot de late uurtjes van de nacht. Dus start jouw tijd bij De Bolk goed en ga mee op kennismakingstijd!</p>
    </div>

    <div v-if="language == 'english'" class="content">
      <h2>WHAT IS THE KMT?</h2>
      <p>The KMT or KennisMakingsTijd (a period of getting to know each other) is a week of camping and sailing with your future companions. Does that sound fun? Then come along to our introduction time!</p>
      <p>With us, the KMT is a fun, extra week of vacation, without obligations. This is the time to get to know The Bolk and to get to know your year.</p>
      <p>The first time together to organize a big party, the first time sagging until 5 o'clock at The Bolk, fighting together to get your BSA: all experiences that you will experience with your yearlings. You will also get to know The Bolk, the older members who will help you form committees, the board that is always there to answer your questions, the old guys that always nag about everything until the late hours of the night. So start your time at The Bolk and go along with getting acquainted!</p>
    </div>
  </div>
</template>

<style>

#kmt{
  padding: 100px 0px;
  color: white;
  position: relative;
  background-color: #068b8c;
  font-family: Bierstadt Bold;
}

</style>
