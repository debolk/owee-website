<template>
  <div id="main">
    <div class="content">
      <h2>Ben jij er al klaar voor?</h2>
      <p>De OWee markeert het begin van een nieuwe periode in je leven: je studententijd. Maar hoe gaat jouw studentenleven eruit zien?</p>
      <p>Van 20 t/m 24 augustus is Delft een groot feest, speciaal voor jou als eerstejaars. De OWee is jouw moment om jezelf opnieuw uit te vinden en te ontdekken wat er nu echt bij jou past.</p>
      <p>De hele week organiseert de Bolk speciaal voor jou allerlei gave activiteiten, zodat je helemaal uit je Bolk kan gaan om jou studietijd een onvergetelijke start te geven!</p>
      <p>Benieuwd wat er allemaal te doen gaat zijn, en wat de Bolk allemaal te bieden heeft? Daar is deze website speciaal voor gebouwd! Kijk lekker rond, zet het in je agenda en kom langs tijdens de OWee!</p>
    </div>
    <div class="upsidedowntriangles"></div>
  </div>
</template>

<style>

#main p{
  color: white;
}

#main{
  background-color: #8700a0;
  padding: 100px 0px;
  position: relative;
}

.maintriangles{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-image: url('~/assets/triangle-blue.svg');
  background-size: contain;
}

.upsidedowntriangles{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: -18px;
  background-image: url('~/assets/triangle-purple-upsidedown.svg');
  background-size: contain;
  z-index: 5;
}
</style>
