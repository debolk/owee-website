<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="#main" v-smooth-scroll>OWee</a>
          <a href="#vereniging" v-smooth-scroll>vereniging</a>
          <a href="#schema" v-smooth-scroll>Programma</a>
          <a href="#kmt" v-smooth-scroll>KMT</a>
          <a href="#sleepin" v-smooth-scroll>Sleepin</a>
          <a href="#quotes" v-smooth-scroll>Quotes</a>
          <a href="#contact" v-smooth-scroll>Contact</a>
        </div>

        <div class="navbar-end">
          <!-- navbar items -->
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
  .navbar{
    background-color: #8700a0;
  }

  .navbar a{
    font-family: 'Fredoka One', cursive;
    color: white;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-right: 20px;
  }

  .navbar-menu{
    margin-left: 20px;
  }

  .navbar-brand img{
    position: relative;
    bottom: 7px;
    height: 50px;
  }
</style>
