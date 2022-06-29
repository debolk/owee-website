<template>
  <div id="contact">
    <div class="content">

      <h2 v-if="$cookie.get('language') == 'dutch'">waar kan je ons vinden?</h2>
      <h2 v-if="$cookie.get('language') == 'english'">where can you find us?</h2>

      
      <p>
        De Bolk (D.S.V. "Nieuwe Delft")<br/>
        Buitenwatersloot 1-3<br/>
        2613 TA Delft
      </p>

      <p>
      Telefoon/Phone: 015 212 6012<br/>
      E-mail: <a href="mailto:owee@nieuwedelft.nl">owee@nieuwedelft.nl</a><br/>
      Website: <a href="http://www.debolk.nl">www.debolk.nl</a>
      </p>
    </div>

  </div>
</template>

<style>

#contact h2{
  color: #af46e8 !important;
}

#contact p{
  color: #af46e8;
  font-family: Bierstadt Bold;
}

#contact a{
  color: #af46e8;
  text-decoration: underline;
  font-family: Bierstadt Bold;
}

#contact a:hover{
  color: white;
}

#contact{
  background-color: #32fced;
  padding: 100px 0px;
  position: relative;
  text-align: center;
}

</style>
