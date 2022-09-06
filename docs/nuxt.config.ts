import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

  extends: [
    (process.env.DOCUS_THEME_PATH || '@nuxt-themes/docus'),
  ],

  // Commenting this out for now to show the static routes issue I want to figure out first
  
  // app: {
  //   baseURL: '/docs/',
  // },

})
