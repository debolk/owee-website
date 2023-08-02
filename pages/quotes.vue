<script setup>
import { useMq } from "vue3-mq";

const mq = useMq();
const language = useCookie("language", {maxAge: 100 * 24 * 60 * 60, default: () => { return "dutch" }});
</script>

<template>

  <div id="quotes">
      <h2 v-if="language === 'dutch'" style="color: #068b8c !important;">WAAROM BEN JIJ HIER LID GEWORDEN?</h2>
      <h2 v-if="language === 'english'" style="color: #068b8c !important;">WHY DID YOU BECOME A MEMBER?</h2>
      <Carousel class="carousel" v-bind:class="{ 'mobile-carousel': $device.isMobile }"
        :items-to-show="cardsamount" :items-to-scroll="1" :snap-align="'center'" :wrap-around="true">
        <Slide class="slide" v-for="i in quotes" :key="i.person">
          <div class="slide-container">
            <img class="photo" :src="`/quotes/${i.person}.jpg`" alt="quotePhoto">
            <p>"{{i.quote}}"</p>
			      <br>
            <i> - {{i.person}} </i>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>

  </div>
</template>

<script>
import quotes from '~/assets/quotes'
import {useMq} from "vue3-mq";

export default {
  data(){
    return{
      quotes: quotes
    }
  },

  inject: ["mq"],

  computed: {
    cardsamount: function(){
      switch(this.mq.current){
        case 'mobile':
          return 1
        case 'twocards':
          return 2
        case 'threecards':
          return 3
        case 'fourcards':
          return 4
        case 'fivecards':
          return 5
        case 'desktop':
          return 5
      }
    }
  }
}

</script>


<style>

#quotes{
  padding: 100px 0;
  background-color: #e8ffb0;
  color: #e8ffb0;
  position: relative;
  font-family: Bierstadt Bold;
}

.mobile-carousel .carousel__next,
.mobile-carousel .carousel__prev{
  margin-left: 20px;
  margin-right: 20px;
}

.carousel__next,
.carousel__prev{
	margin-left: 70px;
	margin-right: 70px;
  min-width: 30px;
  min-height: 30px;
	border: none;
	z-index: 5;
}

.carousel{
	padding-left: 110px;
	padding-right: 110px;
}

.mobile-carousel{
  padding-left: 60px;
  padding-right: 60px;
}

.slide-container{
  font-weight: 500;
  border-radius: 10px;
  background-color: #068b8c;
  padding: 20px;
  margin: 0 10px;
  height: 100%;
  width: 100%;
}

.photo{
  border-radius: 10px;
  width: 100%;
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 10px;
  border: 2px solid #e8ffb0;
}

</style>
