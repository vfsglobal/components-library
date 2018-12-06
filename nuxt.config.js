module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'VFS Global - Component Library',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/vfs.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
 loading: {
    height: '5px',
    color: '#172272' 
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/common.scss',
    '~/static/fonts/icons/font-face.css',
    '~/static/fonts/Helvetica/font-face.css',
    '~/static/fonts/Kuoni-Feijoa/font-face.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
