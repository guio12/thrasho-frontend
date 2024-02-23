// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt'],
  devtools: { enabled: true },
  ssr: true, // à modifier si besoin, voir pour changer de type par route -> https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
  typescript: {
    typeCheck: false, // penser à l'utiliser ou au moins npx nuxi typecheck avant commit
    strict: true,
  },
})
