<template>
  <div id="inschrijven">

    <div v-if="$cookie.get('language') == 'dutch'" class="content">
      <h2>Interesse in de Bolk?!</h2>
      <p>Schrijf je dan in op de interesselijst hieronder, dan nemen wij contact met je op!</p>
      <div class="buttondiv">
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=8NoowSVgvUukKIrGhg0TrGTRpYy4NGVInDMBUOA3jddUODdZRlNUUkZFWEZLTkhFNkszSEg0UTZTSy4u" class="custombutton">Ik ben geïnteresseerd!</a>
      </div>
    </div>

    <div v-if="$cookie.get('language') == 'english'" class="content">
      <h2>Interested in de Bolk?</h2>
      <p>Leave your information in the form below and we will contact you!</p>
      <div class="buttondiv">
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=8NoowSVgvUukKIrGhg0TrGTRpYy4NGVInDMBUOA3jddUNVo5MkFYRkxBNVRBQVdGOUg2NU0yU1RMWS4u" class="custombutton">I'm interested!</a>
      </div>
    </div>

    <div class="verenigingtriangles"></div>
  </div>
</template>

<style>

#inschrijven{
  padding: 100px 0;
  background-size: cover;
  background-position: bottom;
  background-color: #045a8f;
  color: white;
  position: relative;
  text-align: center;
}

#inschrijven h2{
  color: white !important;
}

.buttondiv {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custombutton {
  margin: auto;
  background-color: #ee7730;
  border: none;
  color: white;
  padding: 16px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
}

.custombutton:hover {
  background-color: white; /* Green */
  color: black;
}

.verenigingtriangles{
  height: 50px;
  width: 100%;
  background-color: #045a8f;
  position: absolute;
  bottom: 0;
  background-image: url('~assets/triangle-purple.svg');
  background-size: contain;
}
</style>
