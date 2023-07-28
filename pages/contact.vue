<script setup>
import { useMq } from "vue3-mq";

const mq = useMq();
const language = useCookie("language", {maxAge: 100 * 24 * 60 * 60, default: () => { return "dutch" }});
</script>

<template>
  <div id="contact">
    <div class="content">

      <h2 v-if="language == 'dutch'">WAAR KAN JE ONS VINDEN?</h2>
      <h2 v-if="language == 'english'">WHERE CAN YOU FIND US?</h2>

	  <div class="floatleft" :class="{ mobile : $device.isMobile }">
		  <p>
			De Bolk (D.S.V. "Nieuwe Delft")<br/>
			Buitenwatersloot 1-3<br/>
			2613 TA Delft
		  </p>

		  <p>
		  Telefoon/Phone: 015 212 6012<br/>
		  E-mail: <a href="mailto:owee@nieuwedelft.nl">owee@nieuwedelft.nl</a><br/>
		  Website: <a href="http://www.debolk.nl" target="_blank">www.debolk.nl</a>
		  </p>

		  <div class="socials">
			  <a href="https://www.instagram.com/dsv.nieuwebolk/" target="_blank" class="button2">
				<img src="~/assets/instagram.svg" alt="Instagram icon" width="50" height="50">
			  </a>
			  <a href="https://www.facebook.com/debolk" target="_blank" class="button2">
				<img src="~/assets/facebook.svg" alt="Facebook icon" width="50" height="50">
			  </a>
			  <a href="https://nl.wikipedia.org/wiki/D.S.V._Nieuwe_Delft" target="_blank" class="button2">
				<img src="~/assets/wikipedia.svg" alt="Wikipedia icon" width="50" height="50">
			  </a>
		  </div>
	  </div>

	  <iframe :class="{ mobile : $device.isMobile }" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736.582321526495!2d4.353183702808223!3d52.00873160295196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5c6c9c297dd%3A0x4f0f19d2b4b48a70!2sDe%20Bolk%20(D.S.V.%20%22Nieuwe%20Delft%22)!5e0!3m2!1snl!2snl!4v1656592715654!5m2!1snl!2snl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>

  </div>
</template>

<style>

#contact p{
  color: white;
  font-family: Bierstadt Bold;
}

#contact a{
  color: white;
  text-decoration: underline;
  font-family: Bierstadt Bold;
}

#contact a:hover{
  color: #e8ffb0;
}

#contact{
  background-color: #068b8c;
  padding: 100px 0px;
  position: relative;
  text-align: center;
  align-items: center;
  min-height: 600px;
}

.button2{
	width: auto;
	height: auto;
	background-color: none;
	border: none;
}

.socials {
	display: inline-block;
}

.floatleft{
  float: left;
  display: inline;
  width: 400px;
  max-width: 80vw;
}

#contact iframe{
  display: inline;
  float: right;
  width: 400px;
  max-width: 80vw;
  border: 2px solid #e8ffb0 !important;
  border-radius: 10px;
}

#contact .mobile {
  float: none !important;
  padding: 50px 0px !important;
}

</style>
