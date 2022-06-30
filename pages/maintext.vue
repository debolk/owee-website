<template>
  <div id="main">

    <div v-if="$cookie.get('language') == 'dutch'" class="content">
      <h2>BEN JIJ ER AL KLAAR VOOR?</h2>
      <p>De OWee markeert het begin van een nieuwe periode in je leven: je studententijd. Maar hoe gaat jouw studentenleven eruit zien?</p>
      <p>Op 21 t/m 25 augustus is Delft een groot feest, speciaal voor jou als eerstejaars. De OWee is jouw moment om jezelf opnieuw uit te vinden en te ontdekken wat er nu echt bij jou past.</p>
      <p>De hele week organiseert de Bolk speciaal voor jou allerlei gave activiteiten, zodat je helemaal uit je Bolk kan gaan om jou studietijd een onvergetelijke start te geven!</p>
      <p>Benieuwd wat er allemaal te doen gaat zijn, en wat de Bolk allemaal te bieden heeft? Daar is deze website speciaal voor gebouwd! Kijk lekker rond, zet het in je agenda en kom langs tijdens de OWee!</p>
    </div>

    <div v-if="$cookie.get('language') == 'english'" class="content">
      <h2>ARE YOU READY?</h2>
      <p>The OWee marks the beginning of a new period in your life: your student days. But what does your student life look like?</p>
      <p>On August 21st to the 25th, Delft is a big party, especially for you as a first-year student. The OWee is your time to reinvent yourself and discover what really fits you.</p>
      <p>Curious what to do and what the Bolk has to offer? This website is especially built for that! Have a look around, mark the dates in your diary and visit us during the OWee.</p>
    </div>

    <div class="content">
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fEYfhu617D8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style>

#main p{
  color: white;
  font-family: Bierstadt Bold;
}

#main{
  background-color: #af74e8;
  padding: 100px 0px;
  position: relative;
}

.video-container {
  position: relative;
  padding-bottom: 53%;
  padding-top: 30px; height: 0; overflow: hidden;
  border-radius: 20px;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
