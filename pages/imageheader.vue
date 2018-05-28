<template>
  <div id="header">
    <div id="headerimage">
      <img class="largelogo" src="~/assets/Bolk Logo.svg"><br/>
      <h1>Bolk to be alive</h1>
      <div class="triangles"></div>
    </div>
  </div>
</template>

<style>
  #headerimage{
    background-image: url('~/assets/fotos/DSC_0316.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    border: 10px solid #8700a0;
    display: flex;
    align-items: center;
    justify-content: center;
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
    height:50vh;
    background-repeat: no-repeat;
    margin-right: 20px;
  }

  #headerimage h1{
    font-size: 8rem !important;
    color: #8700a0 !important;
  }
</style>
