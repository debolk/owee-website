module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'De Bolk - OWee 2022',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'website voor de owee van D.S.V. Nieuwe Delft (de Bolk)' },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/favicon.svg" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600', rel: 'stylesheet'},
      {href: '/fonts/BIERSTADT_BI.ttf', rel: "stylesheet"},
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192' , href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    script: [
      {
        src: "/js/fitty.min.js"
      },
    ]
  },
  mode: 'spa',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#af46e8' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-carousel',
      'vue-smooth-scroll',
      'vue-mq',
      'vue-cookie'
    ],
  },
  plugins: [
    { src: '~plugins/vue-carousel', ssr: false },
    { src: '~plugins/vue-smooth-scroll', ssr: true },
    { src: '~plugins/vue-mq', ssr: false },
    { src: '~plugins/vue-cookie', ssr: false }
  ],
  css: [
    { src: 'bulma/bulma.sass', lang: 'sass' }
  ]
}
