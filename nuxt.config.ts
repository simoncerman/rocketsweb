// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxt/ui', '@nuxtjs/supabase'],
  supabase: {
    url: process.env.NUXT_SUPABASE_URL,
    key: process.env.NUXT_SUPABASE_KEY,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/about', '/register','/login', '/starfox'],
      }
  }
})
