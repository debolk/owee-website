<template>
  <div id="sleepin">

    <div v-if="language == 'dutch'" class="content">
      <h2>KAN IK HIER BLIJVEN SLAPEN TIJDENS DE OWEE?</h2>
      <p>Delft is de beste plaats om te blijven slapen tijdens de OWee. Zo kan je alle activiteiten maximaal meepakken. Helaas is het elk jaar weer een flinke opgave om alle aankomende eerstejaars een slaapplek te bezorgen. Voor degenen die niet in studentenhuizen kunnen worden ingedeeld betekent dit helaas dat ze in de gymzaal moeten slapen. Heb jij geen zin om massaal in de sportzaal te slapen? Of heb je echt een hekel aan je huidige slaapadres? Je kunt ook gezellig in een studentenhuis van De Bolk overnachten!</p>
      <p>Er zijn een aantal Bolkhuizen waar jij een slaapplaats kunt krijgen, o.a. het aan de sociëteit verbonden Bolkhuisch, verkozen tot studentenhuis van het jaar 2011!</p>
    </div>

    <div v-if="language == 'english'" class="content">
      <h2>CAN I STAY HERE DURING THE OWEE?</h2>
      <p>Delft is the best place to stay during the OWee. This way you can fully benefit from all activities. Unfortunately, every year it is quite a task to give all future first-years a place to sleep. For those who can not be placed in student houses, this unfortunately means that they have to sleep at the gym. Do not you feel like sleeping en masse at the gym? Or do you really dislike your current sleep address? You can spend the night in a student house at The Bolk!</p>
      <p>There are a number of Bolkhouses where you can get a place to sleep, including the Bolkhuisch attached to the club, voted student house of the year in 2011!</p>
    </div>

  </div>
</template>

<script setup>
const language = useCookie("language", {maxAge: 100 * 24 * 60 * 60, default: () => { return "dutch" }})
</script>

<style>

#sleepin h2{
  color: #068b8c !important;
}

#sleepin p{
  color: #068b8c;
  font-family: Bierstadt Bold;
}

#sleepin{
  background-color: #e8ffb0;
  padding: 100px 0px;
  position: relative;
}

.button{
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 150px;
}

</style>
