<template>
  <div id="main">

    <div v-if="$cookie.get('language') == 'dutch'" class="content">
      <h2>Ben jij er al klaar voor?</h2>
      <p>De OWee markeert het begin van een nieuwe periode in je leven: je studententijd. Maar hoe gaat jouw studentenleven eruit zien?</p>
      <p>Van 19 t/m 23 augustus is Delft een groot feest, speciaal voor jou als eerstejaars. De OWee is jouw moment om jezelf opnieuw uit te vinden en te ontdekken wat er nu echt bij jou past.</p>
      <p>De hele week organiseert de Bolk speciaal voor jou allerlei gave activiteiten, zodat je helemaal uit je Bolk kan gaan om jou studietijd een onvergetelijke start te geven!</p>
      <p>Benieuwd wat er allemaal te doen gaat zijn, en wat de Bolk allemaal te bieden heeft? Daar is deze website speciaal voor gebouwd! Kijk lekker rond, zet het in je agenda en kom langs tijdens de OWee!</p>
    </div>

    <div v-if="$cookie.get('language') == 'english'" class="content">
      <h2>Are you ready?</h2>
      <p>The OWee marks the beginning of a new period in your life: your student days. But what does your student life look like?</p>
      <p>From August 19th to the 23th, Delft is a big party, especially for you as a first-year student. The OWee is your time to reinvent yourself and discover what really fits you.</p>
      <p>Curious what to do and what the Bolk has to offer? This website is especially built for that! Have a look around, mark the dates in your diary and visit us during the OWee.</p>
    </div>

    <div class="content">
      <div class="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/oUJQHqtAr4g?rel=0&amp;showinfo=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
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
