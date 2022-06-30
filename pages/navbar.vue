<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
		<h2 v-if="$isMobile()" class="navtitle">BOLK TO THE FUTURE</h2>
        <a role="button" class="navbar-burger" v-bind:class="{ 'is-active': burger }" @click="burger = !burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu is-active"
      v-bind:class="{ 'is-down': burger, 'navmenusmall': ($mq !== 'threecards' && $mq !== 'fourcards' && $mq !== 'desktop') }">
        <div v-if="$cookie.get('language') == 'dutch'" class="navbar-start">
          <div class="menuitemcontainer"><a href="#imageheader" v-smooth-scroll @click="burger = false">HOME</a></div>
          <div class="menuitemcontainer"><a href="#main" v-smooth-scroll @click="burger = false">OWEE</a></div>
          <div class="menuitemcontainer"><a href="#vereniging" v-smooth-scroll @click="burger = false">VERENIGING</a></div>
          <div class="menuitemcontainer"><a href="#schema" v-smooth-scroll @click="burger = false">PROGRAMMA</a></div>
          <div class="menuitemcontainer"><a href="#sleepin" v-smooth-scroll @click="burger = false">SLEEP-INN</a></div>
          <div class="menuitemcontainer"><a href="#kmt" v-smooth-scroll @click="burger = false">KMT</a></div>
          <div class="menuitemcontainer"><a href="#quotes" v-smooth-scroll @click="burger = false">QUOTES</a></div>
          <div class="menuitemcontainer"><a href="#contact" v-smooth-scroll @click="burger = false">CONTACT</a></div>
          <div class="menuitemcontainer"><a href="https://debolk.nl/inschrijven" v-smooth-scroll @click="burger = false">SCHRIJF JE IN!</a></div>
        </div>

        <div v-if="$cookie.get('language') == 'english'" class="navbar-start">
          <div class="menuitemcontainer"><a href="#imageheader" v-smooth-scroll @click="burger = false">HOME</a></div>
          <div class="menuitemcontainer"><a href="#main" v-smooth-scroll @click="burger = false">OWEE</a></div>
          <div class="menuitemcontainer"><a href="#vereniging" v-smooth-scroll @click="burger = false">ASSOCIATION</a></div>
          <div class="menuitemcontainer"><a href="#schema" v-smooth-scroll @click="burger = false">SCHEDULE</a></div>
          <div class="menuitemcontainer"><a href="#sleepin" v-smooth-scroll @click="burger = false">SLEEP-INN</a></div>
          <div class="menuitemcontainer"><a href="#kmt" v-smooth-scroll @click="burger = false">KMT</a></div>
          <div class="menuitemcontainer"><a href="#quotes" v-smooth-scroll @click="burger = false">QUOTES</a></div>
          <div class="menuitemcontainer"><a href="#contact" v-smooth-scroll @click="burger = false">CONTACT</a></div>
          <div class="menuitemcontainer"><a href="https://debolk.nl/sign-up" v-smooth-scroll @click="burger = false">SIGN UP!</a></div>
        </div>

        <div class="navbar-end">
          <div v-if="$cookie.get('language') == 'dutch'" class="navbar-start">
            <div class="menuitemcontainer"><a @click="setCookie('english')"><img src="~/assets/united-kingdom.svg" class="flag"> ENGLISH</a></div>
          </div>

          <div v-if="$cookie.get('language') == 'english'" class="navbar-start">
            <div class="menuitemcontainer"><a @click="setCookie('dutch')"><img src="~/assets/netherlands.svg" class="flag"> NEDERLANDS</a></div>
          </div>
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

  methods: {
    setCookie(lang){
      //set cookie for 100 days, that should probably be enough
      this.$cookie.set('language', lang, '100')
      //this.burger = false;
      location.reload()
    }
  }
}



</script>

<style>
  .navbar{
    background-color: #af74e8;
  }
  
  .navtitle{
	font-size: 1.25rem !important;
	text-align: center;
	width: calc(100% - 3.25rem);
	margin: auto;
  }

  .flag{
    width: 25px;
    position: relative;
    top: 6px;
  }

  .navbar-menu{
    background-color: #af74e8;
    text-align: center;
    width: 100%;
    padding: 0;
    position: fixed;
    border-bottom: 5px solid #af46e8;
    transition: 0.2s ease all;
  }

  .navmenusmall{
    top: -550px;
  }

  .is-down{
    top: 57px;
  }

  .navbar-brand{
    border-bottom: 5px solid #af46e8;
  }

  .navbar-menu a {
    width: 100%;
    height: 100%;
    display: block;
  }

  .menuitemcontainer{
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
    color: #af74e8;
  }

  .navbar a{
    font-family: 'BTTF', cursive;
    color: white;
    font-size: 1.2rem;
  }

  .navbar-brand img{
    position: relative;
    bottom: 7px;
    height: 50px;
  }
</style>
