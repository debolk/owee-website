<template>
  <div id="kmt">

    <div v-if="$cookie.get('language') == 'dutch'" class="content">
      <h2>Wat is de KMT?</h2>
      <p>Normaal gaan wij een weekje op kamp en zeilen met je toekomstige jaargenoten. Dit jaar loopt het wat anders vanwege de nieuwe corona maatregelen. Daarom doen wij dit jaar een paar avonden met online activiteiten. Lijkt het jou leuk om je jaargenoten en de Bolk beter te leren kennen? Doe dan mee met onze kennismakingstijd!</p>
      <p>Bij de Bolk doen wij niet aan ontgroenen, normaal is de KMT dan ook een leuk extra weekje vakantie zonder verplichtingen. Dit is hét moment om verder kennis te maken met de Bolk en jouw jaarlaag goed te leren kennen. Dit jaar is het online, maar dat maakt het niet minder leuk om met een groep mensen dezelfde ervaringen voor het eerst mee te maken. </p>
      <p>De eerste keer samen een groot (online) feest organiseren, de eerste keer doorzakken tot 5 uur op de Bolk, samen strijden om je BSA te halen: allemaal ervaringen die je met je jaargenoten zal beleven. Je zal ook de Bolk verder leren kennen, de oudere leden die je zullen helpen commissies te vormen, het bestuur dat er altijd is om jouw vragen te beantwoorden, de oude lullen waarmee je altijd over alles kan zeuren tot de late uurtjes van de nacht. Dus start jouw tijd bij de Bolk op een goede manier en doe mee met de online kennismakingstijd!</p>
    </div>

    <div v-if="$cookie.get('language') == 'english'" class="content">
      <h2>What is the KMT?</h2>
      <p>Normally, we would go camping and sailing for a week with you and your future, fellow, newly joined Bolkers. This year things will go a bit differently because of the new Corona measures. That's why we will be organising a couple of evenings filled with online activities. Would you like to meet your fellow Bolkers and learn more about the Bolk? Then join the Gettingtoknoweachothertime (KMT in Dutch)!</p>
      <p>At the Bolk, we don't do hazings, which is why the KMT is normally just a fun week of extra vacation without obligations. It is the moment to further get to know the Bolk and your fellow firstyears. This year, all of it will be online, but we won't let that take away from the fun of sharing these first experiences with the same group of people. </p>
      <p>The first time organising a large online party, the first time lingering in the fun until 5 a.m., all of you battling to get your BSA this year: all experiences you share with the other firstyears of the Bolk. You will also get to know more about the Bolk, the Bolkers who are going to help you form activity committees, the board who are always available for your questions, the older Bolkers who will join your complaining whatever the subject is, until the wee hours of the night/morning. So start your time at the Bolk in the best way possible, and sign up for the online KMT!</p>
    </div>

    <div class="verenigingtriangles"></div>
  </div>
</template>

<style>

#kmt{
  padding: 100px 0px;
  background-color: #045a8f;
  color: white;
  position: relative;
  /*background-image: url('~assets/fotos/kmt botter.jpg');*/
  background-position: bottom;
  background-size: cover;
}

#kmt h2{
  color: white !important;
}

.verenigingtriangles{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-image: url('~assets/triangle-purple.svg');
  background-size: contain;
}
</style>
