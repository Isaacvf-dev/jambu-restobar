// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    //'@nuxtjs/stylelint-module',
    //'@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
})
