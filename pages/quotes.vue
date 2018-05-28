<template>
  <div id="quotes">

    <div class="content">

      <h2>Waarom ben je hier lid geworden?</h2>

      <carousel class="carousel"
        :perPage="3"
        :navigationEnabled="true"
        :navigationClickTargetSize="5"
        :navigationPrevLabel="' '"
        :navigationNextLabel="' '">
        <slide class="slide" v-for="(i, index) of quotes">
          <div class="slide-container">
            <img class="photo" :src="`/quotes/${i.person}.jpg`">
            <p>"{{i.quote}}"</p>
            <i> - {{i.person}} </i>
          </div>
        </slide>
      </carousel>

    </div>

  </div>
</template>

<script>
import quotes from '~/assets/quotes'

export default{
  data(){
    return{
      quotes: quotes
    }
  }
}

</script>

<style>

#quotes{
  padding: 100px 0px;
  background-color: #8700a0;
}

#quotes .VueCarousel-navigation button{
	margin-left: 20px;
	margin-right: 20px;
	border: solid white;
	border-width: 0 2px 2px 0 !important;
	width: 30px;
	height: 30px;
}

.VueCarousel-navigation-prev{
  transform: rotate(135deg) !important;
}

.VueCarousel-navigation-next{
  transform: rotate(-45deg) !important;
}

.carousel{
	padding-left: 60px;
	padding-right: 60px;
}

.slide-container{
  font-weight: 500;
  color: white;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.2);
  padding: 10px;
  margin: 0 10px;
  height: 100%;
}

.photo{
  border-radius: 10px;
  width: 100%;
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 10px;
}

</style>
