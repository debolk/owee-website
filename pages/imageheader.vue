<template>
  <div id="header">
    <div id="imageheader">
      <img
        class="largelogo"
        src="~/assets/Bolk Logo.svg">
      <br/>
      <h1 v-bind:class="{ 'mobileheadertext': $mq === 'mobile' }">Bolk to be alive</h1>
      <div class="triangles"></div>
    </div>
  </div>
</template>

<style>
  #imageheader{
    background-image: url('~/assets/fotos/DSC_0316.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    border: 10px solid #8700a0;
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
    background-image: url('~/assets/triangle-purple.svg');
    background-size: contain;
  }

  .largelogo{
    height:50vw;
    background-repeat: no-repeat;
    margin-right: 20px;
    max-height: 50vh;
  }

  #imageheader .mobileheadertext{
    font-size: 4rem !important;
  }

  #imageheader h1{
    font-size: 8rem !important;
    color: #87eebf !important;
    text-shadow: -4px 0 #8700a0, 0 4px #8700a0, 4px 0 #8700a0, 0 -4px #8700a0;
  }
</style>
