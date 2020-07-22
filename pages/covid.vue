<template>
  <div id="covid">

    <div v-if="$cookie.get('language') === 'dutch'" class="content">
      <h2>COVID-19</h2>
      <p>Ook bij De Bolk wordt er rekening gehouden met de maatregelen omtrent COVID-19. Zo zal er tijdens de OWee en op reguliere avonden rekening gehouden met de (inmiddels welbekende) regels omtrent 1,5m afstand houden en hygiëne.</p>
      <p>Momenteel worden de meeste van de activiteiten over onze Discord server gehouden.</p>
    </div>

    <div v-if="$cookie.get('language') === 'english'" class="content">
      <h2>COVID-19</h2>
      <p>At De Bolk we follow the Dutch rules concerning COVID-19. During the OWee we will follow the (well-known) rules about 1,5m distance and hygiëne, this also applies to the regular evenings at De Bolk. </p>
      <p>Currently, most of our activities are held on our Discord server.</p>
    </div>

    <div class="upsidedowntriangles"></div>
  </div>
</template>

<style>

#covid p{
  color: white;
}

#covid{
  background-color: #ee7730;
  padding: 100px 0;
  position: relative;
}

.button{
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 150px;
}

</style>
