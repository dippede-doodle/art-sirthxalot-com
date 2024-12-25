// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
      head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          link: [
              {
                  rel: 'preconnect',
                  href: 'https://fonts.googleapis.com'
              },
              {
                  rel: 'preconnect',
                  href: 'https://fonts.googleapis.com',
                  crossorigin: ''
              },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'
              }
          ],
      },
  },
  css: [
      '~/assets/css/main.css',
      '~/assets/fonts/fontawesome/css/all.css',
      '~/assets/fonts/rs-creator-feature/absender.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
