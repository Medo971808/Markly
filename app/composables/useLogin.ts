import { ref } from 'vue'
import {
    signInWithEmailAndPassword, signOut, onAuthStateChanged,
    GoogleAuthProvider, signInWithPopup, type User, sendPasswordResetEmail,
    type Auth
} from 'firebase/auth'
import { useNuxtApp } from '#app'

export const useLogin = () => {
    const nuxtApp = useNuxtApp()
    const auth = nuxtApp.$firebaseAuth as Auth

    const user = ref<User | null>(null)
    const error = ref<string | null>(null)
    const loading = ref(false)

    onAuthStateChanged(auth, (u) => { user.value = u })

    const login = async (email: string, password: string) => {
        if (!email || !password) {
            error.value = 'Please fill in email and password'
            return null
        }

        loading.value = true
        error.value = null
        try {
            const credential = await signInWithEmailAndPassword(auth, email, password)
            user.value = credential.user
            loading.value = false
            return credential.user
        } catch (err: any) {
            error.value = err.message
            loading.value = false
            return null
        }
    }
    const loginWithGoogle = async () => {
        loading.value = true
        error.value = null
        try {
            const provider = new GoogleAuthProvider()
            const credential = await signInWithPopup(auth, provider)
            user.value = credential.user
            loading.value = false
            return credential.user
        } catch (err: any) {
            error.value = err.message
            loading.value = false
            return null
        }
    }
    const logout = async () => {
        try {
            await signOut(auth)
            user.value = null
        } catch (err: any) {
            error.value = err.message
        }
    }

    const resetPassword = async (email: string) => {
        if (!email) {
            error.value = 'Please enter your email'
            return
        }

        loading.value = true
        error.value = null
        try {
            await sendPasswordResetEmail(auth, email)
            loading.value = false
            return true
        } catch (err: any) {
            error.value = err.message
            loading.value = false
            return false
        }
    }

    return { user, error, loading, login, loginWithGoogle, logout, resetPassword }
}
