export default defineNuxtConfig({
  /*
  ** Headers of the page
  */
  app: {
    head: {
      title: 'De Bolk - OWee 2023',
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
      ]
    }
  },
  head: {
    title: 'De Bolk - OWee 2023',
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
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#e8ffb0' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue3-smooth-scroll',
      'vue3-mq'
    ]
  },
  modules: [
    '@nuxtjs/device',
    'vue3-carousel-nuxt'
  ],
  plugins: [
    { src: 'plugins/vue3-smooth-scroll', ssr: false },
    { src: 'plugins/vue3-mq', ssr: false }
  ],
  css: [
    { src: 'bulma/bulma.sass', lang: 'sass' }
  ]
})
