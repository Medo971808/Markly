import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  let auth: any = null

  const initFirebase = async () => {
    const { initializeApp } = await import('firebase/app')
    const { getAuth } = await import('firebase/auth')

    const config = useRuntimeConfig()
    const firebaseConfig = {
      apiKey: config.public.firebaseApikey,
      authDomain: config.public.firebaseAuthDomain,
      projectId: config.public.firebaseProjectID,
      storageBucket: config.public.firebaseStorageBucket,
      messagingSenderId: config.public.firebaseMessagingSenderID,
      appId: config.public.firebaseAppID
    };

    const app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    return auth
  }

  nuxtApp.provide('firebaseAuth', async () => {
    if (!auth) {
      auth = await initFirebase()
    }
    return auth
  })
})
