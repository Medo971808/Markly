export default defineNuxtConfig({
  compatibilityDate: '2025-08-22',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    domains: ['fakestoreapi.com'],
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap'
        }
      ]
    }
  },
  css: [
    '@/assets/main.css'
  ],
  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
    },
  },
  nitro: {
    preset: 'netlify-static'
  }
})