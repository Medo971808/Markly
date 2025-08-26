import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyD36J5l4qtrObfuevpZw1ga8VuRd0k1ZwM",
        authDomain: "markly-29898.firebaseapp.com",
        projectId: "markly-29898",
        storageBucket: "markly-29898.firebasestorage.app",
        messagingSenderId: "298530380251",
        appId: "1:298530380251:web:2acd13e4dbc269fb3beffe"
    };

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    nuxtApp.provide('firebaseAuth', auth)
})
