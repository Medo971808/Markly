import { updateProfile } from 'firebase/auth'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, type User, type Auth } from 'firebase/auth'
import { useNuxtApp } from '#app'

export const useSignup = () => {
    const nuxtApp = useNuxtApp()
    const auth = nuxtApp.$firebaseAuth as Auth

    const user = ref<User | null>(null)
    const error = ref<string | null>(null)
    const loading = ref(false)

    const signupWithEmail = async (email: string, password: string, name: string) => {
        error.value = null
        loading.value = true
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            user.value = res.user
            await updateProfile(user.value, { displayName: name })
            loading.value = false
            return res.user
        } catch (err: any) {
            error.value = err.message
            loading.value = false
            return null
        }
    }

    const signupWithGoogle = async () => {
        error.value = null
        loading.value = true
        try {
            const provider = new GoogleAuthProvider()
            const res = await signInWithPopup(auth, provider)
            user.value = res.user
            loading.value = false
            return res.user
        } catch (err: any) {
            error.value = err.message
            loading.value = false
            return null
        }
    }

    return {
        signupWithEmail, signupWithGoogle, user, error, loading
    }
}
