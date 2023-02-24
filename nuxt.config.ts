// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ['@/assets/scss/base.scss'],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Donnas Testseite',
      meta: [
        { name: 'description', content: 'Eine schöne Beschreibung, yiih.' }
      ],
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap'
        }
      ]
    }
  }
});
