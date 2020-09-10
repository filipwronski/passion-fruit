
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Filip Wroński - JavaScript Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I live in Warsaw and work with Vue.js, PWA, Websites, Web Apps' },
      {
        hid: `keywords`,
        name: 'keywords',
        keywords: 'Vue.js, JavaScript, Filip Wroński, PWA, Web Apps'
      },
      {
        hid: `og:title`,
        property: 'og:title',
        content: `Filip Wroński - JavaScript Developer`
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: 'vue-js.pl'
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: '/ogimage.jpg'
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: 'Vue.js, JavaScript, Filip Wroński, PWA, Web Apps'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazyload.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    'nuxt-webfontloader',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-N56WMW4'
    }],
  ],
  styleResources: {
    scss: [
      'assets/scss/_variables.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  webfontloader: {
    google: {
      families: ['Poppins:400&display=swap']
    }
  }
}
