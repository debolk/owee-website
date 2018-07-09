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
      <div class="navbar-menu is-active"
      v-bind:class="{ 'is-down': burger, 'navmenusmall': ($mq !== 'threecards' && $mq !== 'fourcards' && $mq !== 'desktop') }">
        <div class="navbar-start">
          <div class="menuitemcontainer"><a href="#imageheader" v-smooth-scroll @click="burger = false">Home</a></div>
          <div class="menuitemcontainer"><a href="#main" v-smooth-scroll @click="burger = false">OWee</a></div>
          <div class="menuitemcontainer"><a href="#vereniging" v-smooth-scroll @click="burger = false">Vereniging</a></div>
          <div class="menuitemcontainer"><a href="#schema" v-smooth-scroll @click="burger = false">Programma</a></div>
          <div class="menuitemcontainer"><a href="#kmt" v-smooth-scroll @click="burger = false">KMT</a></div>
          <div class="menuitemcontainer"><a href="#sleepin" v-smooth-scroll @click="burger = false">Sleepin</a></div>
          <div class="menuitemcontainer"><a href="#quotes" v-smooth-scroll @click="burger = false">Quotes</a></div>
          <div class="menuitemcontainer"><a href="#contact" v-smooth-scroll @click="burger = false">Contact</a></div>
          <div v-if="$cookie.get('language') === 'dutch'" class="menuitemcontainer"><a @click="setCookie('english')">English</a></div>
          <div v-if="$cookie.get('language') === 'english'" class="menuitemcontainer"><a @click="setCookie('dutch')">Dutch</a></div>
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
  },

  mounted(){
    //set cookie if none
    if(this.$cookie.get('language') != 'dutch' && this.$cookie.get('language') != 'english'){
      this.$cookie.set('language', 'dutch', '100')
    }
  },

  methods: {
    setCookie(lang){
      this.$cookie.set('language', lang, '100')
      this.burger = false;
      location.reload()
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
    transition: 0.2s ease all;
  }

  .navmenusmall{
    top: -450px;
  }

  .is-down{
    top: 57px;
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
    font-family: 'Britanic bold', cursive;
    color: white;
    font-size: 1.2rem;
  }

  .navbar-brand img{
    position: relative;
    bottom: 7px;
    height: 50px;
  }
</style>
