module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Portfolio about Hayato Waki",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hayato Waki works as software engineer,entrepreneur and eventor.' }
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
   '~/assets/sass/style.scss',

 ],
  modules:[
  'nuxt-webfontloader'
  ],
  webfontloader:{
    google: {
      families: ['Noto+Sans+JP']
    }
  },
  plugins:[
    '~/plugins/scrollInview.js'
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
