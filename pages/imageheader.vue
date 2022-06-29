<template>
  <div id="header">
    <div id="imageheader">
      <img
        class="largelogo"
        src="~/assets/logo.svg"
		v-if="!$isMobile()">
	  <img
        class="largelogo-mobile"
        src="~/assets/logo.svg"
		v-else>
    </div>
  </div>
</template>

<style>
  #imageheader{
    background-image: url('~assets/fotos/header.jpg');
    background-size: cover;
	background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  .largelogo{
    height: 50vw;
    background-repeat: no-repeat;
    margin-right: 20px;
    max-height: 80vh;
  }
  
  .largelogo-mobile{
    height: 90vh;
    background-repeat: no-repeat;
    margin-right: 0px;
  }
  
  .largetext{
    height:50vw;
    background-repeat: no-repeat;
    margin-left: 250px;
    max-height: 50vh;
  }

  #imageheader .mobileheadertext{
    font-size: 4rem !important;
  }

  #imageheader h1{
    font-size: 8rem !important;
    color: #201f58 !important;
    text-shadow: -4px 0 #af74e8,
                -4px -4px #af74e8,
                4px 4px #af74e8,
                -4px 4px #af74e8,
                4px -4px #af74e8,
                0 4px #af74e8,
                4px 0 #af74e8,
                0 -4px #af74e8;
  }
</style>
