module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wakki_portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'this displays all of things in wakki&apos;s life' }
    ],
    script:[
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese'}
    ]
  },
 css: [
   '~/assets/sass/main.scss',
 ],
  modules:[
  'nuxt-webfontloader'
  ],
  webfontloader:{
    google: {
      families: ['Noto+Sans+JP']
    }
  },
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

