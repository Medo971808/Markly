import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
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
    const auth = getAuth(app)

    nuxtApp.provide('firebaseAuth', auth)
})