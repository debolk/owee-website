<template>
  <div id="header">
    <div id="imageheader">
      <img
        v-if="this.$mq === 'mobile'"
        class="largelogo_mobile"
        src="~/assets/Bolk Logo Mobiel2.svg">
      <img
        v-else
        class="largelogo"
        src="~/assets/Bolk Logo.svg">
      <div class="triangles"></div>
    </div>
  </div>
</template>

<style>
  #imageheader{
    background-image: url('~assets/fotos/DSC_0316.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    border: 10px solid #ee7730;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  .triangles{
    height: 50px;
    width: 100%;
    position: absolute;
    top: calc(100vh - 60px);
    background-image: url('~assets/triangle-purple.svg');
    background-size: contain;
  }

  .largelogo{
    height:75vw;
    background-repeat: no-repeat;
    max-height: 75vh;
    max-width: 90%;
  }

  .largelogo_mobile{
    background-repeat: no-repeat;
    max-height: 85vh;
    width: 100%;
  }

  #imageheader .mobileheadertext{
    font-size: 4rem !important;
  }

  #imageheader h1{
    font-size: 8rem !important;
    color: #045a8f !important;
    text-shadow: -4px 0 #ee7730,
                -4px -4px #ee7730,
                4px 4px #ee7730,
                -4px 4px #ee7730,
                4px -4px #ee7730,
                0 4px #ee7730,
                4px 0 #ee7730,
                0 -4px #ee7730;
  }
</style>
