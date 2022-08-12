import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

  extends: [
    (process.env.DOCUS_THEME_PATH || '@nuxt-themes/docus'),
  ],

  app: {
    baseURL: '/docs/',
  },

})
