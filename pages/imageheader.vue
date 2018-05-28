<template>
  <div id="header">
    <div class="headerimage">
      <div class="triangles"></div>
    </div>
  </div>
</template>

<style>
  .headerimage{
    background-image: url('~/assets/fotos/DSC_0316.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    border: 10px solid #8700a0;
  }

  .triangles{
    height: 50px;
    width: 100%;
    position: absolute;
    top: calc(100vh - 55px);
    background-image: url('~/assets/triangle-purple.svg');
    background-size: contain;
  }
</style>
