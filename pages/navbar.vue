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
        <div v-if="$cookie.get('language') == 'dutch'" class="navbar-start">
          <div class="menuitemcontainer"><a href="#imageheader" v-smooth-scroll @click="burger = false">Home</a></div>
          <div class="menuitemcontainer"><a href="#main" v-smooth-scroll @click="burger = false">OWee</a></div>
          <div class="menuitemcontainer"><a href="#vereniging" v-smooth-scroll @click="burger = false">Vereniging</a></div>
          <div class="menuitemcontainer"><a href="#schema" v-smooth-scroll @click="burger = false">Programma</a></div>
          <div class="menuitemcontainer"><a href="#kmt" v-smooth-scroll @click="burger = false">KMT</a></div>
          <div class="menuitemcontainer"><a href="#covid19" v-smooth-scroll @click="burger = false">Covid-19</a></div>
          <div class="menuitemcontainer"><a href="#quotes" v-smooth-scroll @click="burger = false">Quotes</a></div>
          <div class="menuitemcontainer"><a href="#contact" v-smooth-scroll @click="burger = false">Contact</a></div>
          <div class="menuitemcontainer"><a href="cocktails" v-smooth-scroll @click="burger = false">Cocktails</a></div>
          <div class="menuitemcontainer"><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=m2tYomf4PEuTY1tDXF28RVc2FTJosthCiYwvudE5NzBUMDhFSlBNNFVUQU80NTU0VTFRUEpaRUVGTi4u" v-smooth-scroll @click="burger = false">Schrijf je in!</a></div>
        </div>

        <div v-if="$cookie.get('language') == 'english'" class="navbar-start">
          <div class="menuitemcontainer"><a href="#imageheader" v-smooth-scroll @click="burger = false">Home</a></div>
          <div class="menuitemcontainer"><a href="#main" v-smooth-scroll @click="burger = false">OWee</a></div>
          <div class="menuitemcontainer"><a href="#vereniging" v-smooth-scroll @click="burger = false">Association</a></div>
          <div class="menuitemcontainer"><a href="#schema" v-smooth-scroll @click="burger = false">Schedule</a></div>
          <div class="menuitemcontainer"><a href="#kmt" v-smooth-scroll @click="burger = false">KMT</a></div>
          <div class="menuitemcontainer"><a href="#covid19" v-smooth-scroll @click="burger = false">Covid-19</a></div>
          <div class="menuitemcontainer"><a href="#quotes" v-smooth-scroll @click="burger = false">Quotes</a></div>
          <div class="menuitemcontainer"><a href="#contact" v-smooth-scroll @click="burger = false">Contact</a></div>
		  <div class="menuitemcontainer"><a href="cocktails" v-smooth-scroll @click="burger = false">Cocktails</a></div>
          <div class="menuitemcontainer"><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=m2tYomf4PEuTY1tDXF28RVc2FTJosthCiYwvudE5NzBUMUlOSFgyTjlZVVFFT1RXWlNEN0tXNENZQi4u" v-smooth-scroll @click="burger = false">Sign up!</a></div>
        </div>

        <div class="navbar-end">
          <div v-if="$cookie.get('language') == 'dutch'" class="navbar-start">
            <div class="menuitemcontainer"><a @click="setCookie('english')"><img src="~/assets/united-kingdom.svg" class="flag"> English</a></div>
          </div>

          <div v-if="$cookie.get('language') == 'english'" class="navbar-start">
            <div class="menuitemcontainer"><a @click="setCookie('dutch')"><img src="~/assets/netherlands.svg" class="flag"> Nederlands</a></div>
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
    background-color: #63d6ed;
  }

  .flag{
    width: 25px;
    position: relative;
    top: 6px;
  }

  .navbar-menu{
    background-color: #63d6ed;
    text-align: center;
    width: 100%;
    padding: 0;
    position: fixed;
    border-bottom: 5px solid #201f58;
    transition: 0.2s ease all;
  }

  .navmenusmall{
    top: -550px;
  }

  .is-down{
    top: 57px;
  }

  .navbar-brand{
    border-bottom: 5px solid #201f58;
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
    color: #63d6ed;
  }

  .navbar a{
    font-family: 'Bierstadt Bold', cursive;
    color: white;
    font-size: 1.2rem;
  }

  .navbar-brand img{
    position: relative;
    bottom: 7px;
    height: 50px;
  }
</style>
