<template>
  <div id="covid19">

    <div v-if="$cookie.get('language') == 'dutch'" class="content">
      <h2>Corona?</h2>
      <p>Ook bij De Bolk wordt er rekening gehouden met de maatregelen omtrent COVID-19. Zo zal er tijdens de OWee en op reguliere avonden rekening gehouden met de (inmiddels welbekende) regels omtrent 1,5m afstand houden en hygiëne.</p>
    </div>

    <div v-if="$cookie.get('language') == 'english'" class="content">
      <h2>Corona?</h2>
      <p>At De Bolk we follow the Dutch rules concerning COVID-19. During the OWee we will follow the (well-known) rules about 1,5m distance and hygiëne, this also applies to the regular evenings at De Bolk. </p>
    </div>
    
    <div class="upsidedowntriangles"></div>
  </div>
</template>

<style>

#covid19 p{
  color: white;
}

#covid19{
  background-color: #63d6ed;
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
