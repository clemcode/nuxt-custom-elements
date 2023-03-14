// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    vue: {
      template :{
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('hello-world')
        }
      }
    }
  }
})
