module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'De Bolk - OWee 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'website voor de owee van D.S.V. Nieuwe Delft (de Bolk)' },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600', rel: 'stylesheet'},
      {href: '/fonts/BRITANIC.TTF', rel: "stylesheet"},
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192' , href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
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
  loading: { color: '#3B8070' },
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
