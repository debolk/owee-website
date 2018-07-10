<template>
  <div id="sleepin">

    <div v-if="$cookie.get('language') == 'dutch'" class="content">
      <h2>Kan ik hier blijven slapen in de OWee?</h2>
      <p>Delft is de beste plaats om te blijven slapen tijdens de OWee. Zo kan je alle activiteiten maximaal meepakken. Helaas is het elk jaar weer een flinke opgave om alle aankomende eerstejaars een slaapplek te bezorgen. Voor degenen die niet in studentenhuizen kunnen worden ingedeeld betekent dit helaas dat ze in de gymzaal moeten slapen. Heb jij geen zin om massaal in de sportzaal te slapen? Of heb je echt een hekel aan je huidige slaapadres? Je kunt ook gezellig in een studentenhuis van De Bolk overnachten!</p>
      <p>Er zijn een aantal Bolkhuizen waar jij een slaapplaats kunt krijgen, o.a. het aan de sociëteit verbonden Bolkhuisch, verkozen tot studentenhuis van het jaar 2011! Lijkt jou dat wel wat? Schrijf je dan hieronder in!</p>
    </div>

    <div v-if="$cookie.get('language') == 'english'" class="content">
      <h2>Can I stay here during the OWee?</h2>
      <p>Delft is the best place to stay during the OWee. This way you can fully benefit from all activities. Unfortunately, every year it is quite a task to give all future first-years a place to sleep. For those who can not be placed in student houses, this unfortunately means that they have to sleep at the gym. Do not you feel like sleeping en masse at the gym? Or do you really dislike your current sleep address? You can spend the night in a student house at The Bolk!</p>
      <p>There are a number of Bolkhouses where you can get a place to sleep, including the Bolkhuisch attached to the club, voted student house of the year in 2011! Does that sound good to you? Then register below!</p>
    </div>
    
    <div class="upsidedowntriangles"></div>
  </div>
</template>

<style>

#sleepin p{
  color: white;
}

#sleepin{
  background-color: #8700a0;
  padding: 100px 0px;
  position: relative;
}

</style>
