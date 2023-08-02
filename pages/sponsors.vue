<script setup>
import { useMq } from "vue3-mq";

const mq = useMq();
const language = useCookie("language", {maxAge: 100 * 24 * 60 * 60, default: () => { return "dutch" }});
</script>

<template>
  <div id="sponsors">
    <div class="sponsors" :class="{ mobilesponsors : $device.isMobile }">

      <h2 v-if="language == 'dutch'" style="color: #068b8c !important;">LIEVE MENSEN DIE ONS SPONSOREN</h2>
      <h2 v-if="language == 'english'" style="color: #068b8c !important;">NICE PEOPLE THAT SPONSOR US</h2>

      <a id="link" class="left" :class="{ mobile : $device.isMobile }" href="https://www.facebook.com/profile.php?id=100057201169713" target="_blank"><img :class="{ mobile : $device.isMobile}" src="~/assets/mwtransportservice.svg" alt="MW Transportservice"></a>
      <br>
      <a id="link" class="right" :class="{ mobile : $device.isMobile }" href="https://wineandmorebyarjan.nl/" target="_blank"><img :class="{ mobile : $device.isMobile }" src="~/assets/winenmore.svg" alt="Wine & More"></a>

    </div>

  </div>
</template>

<style>

#sponsors{
  padding: 100px 0;
  background-color: #e8ffb0;
  color: #068b8c;
  position: relative;
  font-family: Bierstadt Bold;
  min-height: calc(70vh + 10px);
}

#sponsors .mobilesponsors{
  min-height: calc(150vh) !important;
}

#sponsors h2{
  color: #068b8c !important;
}

#sponsors .mobile {
  left: 10vw !important;
  padding: 10px 0 !important;
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
  left: 400px;
}

.right{
  right: 400px;
}

.right.mobile{
  top: 200vw !important;
}

</style>
