module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    'nuxt-fontawesome',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-134067594-1'
    }],
  ],
  manifest: {
    name: 'pop-idea',
    short_name: 'pop-idea',
    title: 'pop-idea',
    'og:title': 'pop-idea',
    description: 'pop-idea',
    'og:description': 'pop-idea',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  head: {
    title: 'pop-idea',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  workbox: {
    dev: true,
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  /*
  ** Include css not in components
  */
  css: [
    // node.js module but we specify the pre-processor
    { src: "~assets/main.scss", lang: "scss" }
    //{ src: 'bulma/bulma.sass', lang: 'sass' }
  ],
}

