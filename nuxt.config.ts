// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxthq/ui', 'nuxt-icon', '@nuxtjs/supabase'],
  supabase: {
    redirect: false
  }
})