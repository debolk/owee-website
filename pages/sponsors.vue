<template>
  <div id="sponsors">
    <div class="sponsors" :class="{ mobilesponsors : $isMobile() }">

      <h2 v-if="$cookie.get('language') == 'dutch'" style="color: #068b8c !important;">LIEVE MENSEN DIE ONS SPONSOREN</h2>
      <h2 v-if="$cookie.get('language') == 'english'" style="color: #068b8c !important;">NICE PEOPLE THAT SPONSOR US</h2>

    </div>

  </div>
</template>

<style>

#sponsors{
  padding: 100px 0px;
  background-color: #e8ffb0;
  color: #068b8c;
  position: relative;
  font-family: Bierstadt Bold;
  min-height: calc(90vh + 10px);
}

#sponsors .mobilesponsors{
  min-height: calc(150vh) !important;
}

#sponsors h2{
  color: #068b8c !important;
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
