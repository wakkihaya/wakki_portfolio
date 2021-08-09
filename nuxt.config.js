module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "wakki | Hayato Waki",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio about Hayato Waki.' },
      { hid: 'keywords', name: 'keywords', content: 'Hayato Waki,和木勇人'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'Hayato Waki Portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://wakkihaya.com' },
      { hid: 'og:title', property: 'og:title', content: 'wakki | Hayato Waki' },
      { hid: 'og:description', property: 'og:description', content: 'Portfolio about Hayato Waki.' },
      { hid: 'og:image', property: 'og:image', content: 'https://wakkihaya.com/ogp.jpg' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese' }
    ]
  },
  css: [
    '~/assets/sass/style.scss',
  ],
  modules: [
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP']
    }
  },
  plugins: [
    { src: '~/plugins/scrollInview.js' },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** Run ESLint on save
  //   */
  //   extend (config, { isDev, isClient }) {
  //     if (isDev && isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
}
