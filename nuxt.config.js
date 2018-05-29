module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'owee-website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'website voor de owee van D.S.V. Nieuwe Delft (de Bolk)' }
    ],
    link: [
      {href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600', rel: 'stylesheet'},
      {href: 'https://fonts.googleapis.com/css?family=Fredoka+One', rel: "stylesheet"}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-carousel',
      'vue-smooth-scroll',
      'vue-mq'
    ],
  },
  plugins: [
    { src: '~plugins/vue-carousel', ssr: false },
    '~/plugins/vue-smooth-scroll',
    { src: '~plugins/vue-mq.js', ssr: false },
  ],
  css: [
    { src: 'bulma/bulma.sass', lang: 'sass' }
  ]
}
