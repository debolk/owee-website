<script setup>
import { useMq } from "vue3-mq";

const mq = useMq();
const language = useCookie("language", {maxAge: 100 * 24 * 60 * 60, default: () => { return "dutch" }});
</script>

<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
		    <h2 v-if="$device.isMobile" class="navtitle">ALS EEN VIS IN HET WATER!</h2>
        <a role="button" class="navbar-burger" :class="{ 'is-active': burger }" @click="burger = !burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarmenu" class="navbar-menu is-active" :class="{'is-down': burger, navmenusmall: $device.isMobile}">
        <div v-if="language === 'dutch'" class="navbar-start">
          <div class="menuitemcontainer"><a href="#imageheader" v-smooth-scroll @click="burger = false">HOME</a></div>
          <div class="menuitemcontainer"><a href="#main" v-smooth-scroll @click="burger = false">OWEE</a></div>
          <div class="menuitemcontainer"><a href="#vereniging" v-smooth-scroll @click="burger = false">VERENIGING</a></div>
          <div class="menuitemcontainer"><a href="#schema" v-smooth-scroll @click="burger = false">PROGRAMMA</a></div>
          <div class="menuitemcontainer"><a href="#sleepin" v-smooth-scroll @click="burger = false">SLEEP-INN</a></div>
          <div class="menuitemcontainer"><a href="#kmt" v-smooth-scroll @click="burger = false">KMT</a></div>
          <div class="menuitemcontainer"><a href="#quotes" v-smooth-scroll @click="burger = false">QUOTES</a></div>
          <div class="menuitemcontainer"><a href="#contact" v-smooth-scroll @click="burger = false">CONTACT</a></div>
          <div class="menuitemcontainer"><a href="https://website.debolk.nl/inschrijven" target="_blank" v-smooth-scroll @click="burger = false">SCHRIJF JE IN!</a></div>
        </div>

        <div v-if="language === 'english'" class="navbar-start">
          <div class="menuitemcontainer"><a href="#imageheader" v-smooth-scroll @click="burger = false">HOME</a></div>
          <div class="menuitemcontainer"><a href="#main" v-smooth-scroll @click="burger = false">OWEE</a></div>
          <div class="menuitemcontainer"><a href="#vereniging" v-smooth-scroll @click="burger = false">ASSOCIATION</a></div>
          <div class="menuitemcontainer"><a href="#schema" v-smooth-scroll @click="burger = false">SCHEDULE</a></div>
          <div class="menuitemcontainer"><a href="#sleepin" v-smooth-scroll @click="burger = false">SLEEP-INN</a></div>
          <div class="menuitemcontainer"><a href="#kmt" v-smooth-scroll @click="burger = false">KMT</a></div>
          <div class="menuitemcontainer"><a href="#quotes" v-smooth-scroll @click="burger = false">QUOTES</a></div>
          <div class="menuitemcontainer"><a href="#contact" v-smooth-scroll @click="burger = false">CONTACT</a></div>
          <div class="menuitemcontainer"><a href="https://website.debolk.nl/sign-up" target="_blank" v-smooth-scroll @click="burger = false">SIGN UP!</a></div>
        </div>

        <div class="navbar-end">
          <div v-if="language === 'dutch'" class="navbar-start">
            <div class="menuitemcontainer"><a @click="language = 'english'; window.location.reload(); "><img src="~/assets/united-kingdom.svg" class="flag" alt="uk"> ENGLISH</a></div>
          </div>

          <div v-if="language === 'english'" class="navbar-start">
            <div class="menuitemcontainer"><a @click="language = 'dutch'; window.location.reload(); "><img src="~/assets/netherlands.svg" class="flag" alt="nl"> NEDERLANDS</a></div>
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
  inject: ["mq"]
}

</script>

<style>
  .navbar{
    background-color: #068b8c;
  }

  .navtitle{
	font-size: 2rem !important;
	text-align: center;
	width: calc(100% - 3.25rem);
	margin-top: 8px;
  }

  .flag{
    width: 25px;
    position: relative;
    top: 6px;
  }

  .navbar-menu{
    background-color: #068b8c;
    text-align: center;
    width: 100%;
    padding: 0;
    position: fixed;
    border-bottom: 2px solid #e8ffb0;
    transition: 0.2s ease all;
  }

  .navmenusmall{
    top: -600px;
  }

  .is-down{
    top: 57px;
  }

  .navbar-brand{
    border-bottom: 5px solid #e8ffb0;
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
    color: #068b8c;
  }

  .navbar a{
    font-family: 'Some Time Later';
    color: white;
    font-size: 1.5rem;
  }

  .navbar-brand img{
    position: relative;
    bottom: 7px;
    height: 50px;
  }
</style>
