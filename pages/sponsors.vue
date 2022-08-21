<template>
  <div id="sponsors">
    <div class="sponsors" :class="{ mobilesponsors : $isMobile() }">

      <h2 v-if="$cookie.get('language') == 'dutch'">LIEVE MENSEN<br>DIE ONS SPONSOREN</h2>
      <h2 v-if="$cookie.get('language') == 'english'">NICE PEOPLE<br>THAT SPONSOR US</h2>

	  <a id="link" class="left" :class="{ mobile : $isMobile() }" href="https://kimplusdelta.nl/werken-bij-kim-plus-delta/"><img :class="{ mobile : $isMobile()}" src="~/assets/kpd.png" alt="Kim Plus Delta"></a>
	  <a id="link" class="right" :class="{ mobile : $isMobile() }" href="https://www.facebook.com/MW-Transportservice-118538376218854/">MW Transportservice</a>
	  <br>
	  <a id="link" class="center" :class="{ mobile : $isMobile() }" href="https://www.youtube.com/channel/UCoC5EwX2l18L5d1oyDyvXMA"><img :class="{ mobile : $isMobile()}" src="~/assets/blikbierman.svg" alt="DJ BlikBierMan"></a>
	  
    </div>
	
  </div>
</template>

<style>

#sponsors{
  padding: 100px 0px;
  background-color: #32fced;
  color: #af46e8;
  position: relative;
  font-family: Bierstadt Bold;
  min-height: calc(90vh + 10px);
}

#sponsors .mobilesponsors{
  min-height: calc(150vh) !important;
}

#sponsors h2{
  color: #af46e8 !important;
}

#sponsors .mobile {
  left: 10vw !important;
  padding: 50px 0px !important;
  font-size: 6.7vw;
}

#link img.mobile {
  width: 80vw !important;
  max-width: 80vw;
  margin-top: 40px;
}

#link img {
  max-width: 20vw;
  width: 20vw;
  margin-left: auto;
  margin-right: auto;
}

#link{
  position: absolute;
  font-size: 2vw;
}

.center.mobile{
  margin-top: 80px;
}

.center{
  left: 40vw;
}

.left{
  left: 100px;
}

.right{
  right: 100px;
}

</style>
