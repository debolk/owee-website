<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a role="button" class="navbar-burger" v-bind:class="{ 'is-active': burger }" @click="burger = !burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': burger }">
        <div class="navbar-start">
          <div class="menuitemcontainer"><a href="#imageheader" v-smooth-scroll @click="burger = false">Home</a></div>
          <div class="menuitemcontainer"><a href="#main" v-smooth-scroll @click="burger = false">OWee</a></div>
          <div class="menuitemcontainer"><a href="#vereniging" v-smooth-scroll @click="burger = false">vereniging</a></div>
          <div class="menuitemcontainer"><a href="#schema" v-smooth-scroll @click="burger = false">Programma</a></div>
          <div class="menuitemcontainer"><a href="#kmt" v-smooth-scroll @click="burger = false">KMT</a></div>
          <div class="menuitemcontainer"><a href="#sleepin" v-smooth-scroll @click="burger = false">Sleepin</a></div>
          <div class="menuitemcontainer"><a href="#quotes" v-smooth-scroll @click="burger = false">Quotes</a></div>
          <div class="menuitemcontainer"><a href="#contact" v-smooth-scroll @click="burger = false">Contact</a></div>
        </div>

        <div class="navbar-end">
          <!-- navbar items -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default{
  data(){
    return {
      burger: false
    }
  }
}

</script>

<style>
  .navbar{
    background-color: #8700a0;
  }

  .navbar-menu{
    background-color: #8700a0;
    text-align: center;
    width: 100%;
    padding: 0;
    position: fixed;
    border-bottom: 5px solid #87eebf;
  }

  .navbar-brand{
    border-bottom: 5px solid #87eebf;
  }

  .navbar-menu a {
    width: 100%;
    height: 100%;
    display: block;
  }

  .menuitemcontainer{
    width: 100%;
    line-height: 2.5;
    transition: 0.2s ease all;
    border-radius: 10px;
    text-align: center;
    padding: 0 20px;
  }

  .menuitemcontainer:hover {
    background-color: white;
  }

  .menuitemcontainer:hover a{
    color: #8700a0;
  }

  .navbar a{
    font-family: 'Fredoka One', cursive;
    color: white;
    font-size: 1.2rem;
  }

  .navbar-brand img{
    position: relative;
    bottom: 7px;
    height: 50px;
  }
</style>
