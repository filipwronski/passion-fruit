
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Passionfruit - profesjonalna oprawa muzyczna',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Profesjonalna oprawa muzyczna ślubów, imprez firmowych oraz prywatnych uroczystości.' },
      {
        hid: `keywords`,
        name: 'keywords',
        keywords: 'passionfruit, oprawa muzyczna, oprawa muzyncza wesel, muzyka na żywo, oprawa muzyczna ślubów'
      },
      {
        hid: `robots`,
        property: 'robots',
        content: `index, follow`
      },
      {
        hid: `og:title`,
        property: 'og:title',
        content: `Passionfruit - profesjonalna oprawa muzyczna`
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: 'passion-fruit.pl'
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: '/icon.png'
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: 'Profejsonalna oprawa muzyczna ślubów, imprez firmowych oraz uroczystości rodzinnych'
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
    '~/plugins/lazyload.js',
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/vue-youtube-embed.js', mode: 'client' },
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
      id: 'GTM-P3QCV78'
    }],
  ],
  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_mixins.scss'
    ]
  },
  pwa: {
    icon: {
      source: 'assets/pwa/icon-2.png',
    },
    meta: {
      name: 'Passionfruit'
    }
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
    analyze: true,
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
