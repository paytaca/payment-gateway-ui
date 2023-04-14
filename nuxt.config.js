export default {
    // other config options...
      // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    //  ssr: false,

    // // Target: https://go.nuxtjs.dev/config-target
    // target: 'static',
    components: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    head: {
      script: [
        {
          // src:"main.js",
        },
      ],
    },
    router: {
      middleware: ['title']
    },
    generate: {
      fallback: true
    },
    buildModules: [
        "@nuxt/components",
        "@nuxtjs/tailwindcss"
    ],
    modules: [
      // other modules...
    ],
  
    build: {
      // other build options...
    },
    plugins: [
      // { src: '~/plugins/chart.js', mode: 'client' },
      // { src: '~/plugins/axios.js' }
    ]
  }
  