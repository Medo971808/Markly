<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})
const { login, loginWithGoogle, error, loading, resetPassword } = useLogin()
const email = ref('')
const password = ref('')
const forgetPassword = ref('')

const handleLogin = async () => {
    const loggedInUser = await login(email.value, password.value)
    if (loggedInUser) navigateTo("/")
}

const handleGoogleLogin = async () => {
    const loggedInUserWithGoogle = await loginWithGoogle()
    if (loggedInUserWithGoogle) navigateTo("/")
}

const handleForgetPassword = async () => {
    if (!email.value) {
        forgetPassword.value = 'Please enter your email first'
        return
    }

    const success = await resetPassword(email.value)
    if (success) {
        forgetPassword.value = 'Check your email to reset your password'
    }
}
</script>

<template>
    <section class="mt-5 md:mt-0">
        <h1 class="text-3xl md:tracking-widest">Log in to Markly</h1>
        <p class="md:mt-2 mt-3 mb-5">Enter your details below</p>
        <input type="email" v-model="email"
            class="bg-black border-b border-white block w-full mb-5 py-5 pl-2 h-10 focus:outline-none"
            placeholder="Email" />
        <input type="password" v-model="password"
            class="bg-black border-b border-white block w-full mb-5 py-5 pl-2 h-10 focus:outline-none"
            placeholder="Password" />

        <section class="flex justify-between items-center mb-5">
            <button class="bg-[#DB4444] w-28 h-12 rounded-lg hover:bg-[#DB5555]" @click="handleLogin"
                :disabled="loading">
                Log In
            </button>
            <button class="text-[#DB4444]" @click.prevent="handleForgetPassword">
                Forget Password?
            </button>
        </section>
        <p class="text-center mb-2">or</p>
        <button
            class="flex items-center justify-center gap-2 px-4 py-2 bg-[#1A1A1A] border rounded-lg shadow w-full hover:bg-gray-800 transition"
            @click="handleGoogleLogin">
            <FontAwesomeIcon :icon="['fab', 'google']" class="text-2xl transition-colors" />
            Login with Google
        </button>
        <section class="flex justify-center items-center mt-2 ">
            <p class="text-center">Not have an account yet?</p>
            <NuxtLink to="/auth/signup" class=" underline ml-3">Sign Up</NuxtLink>
        </section>
        <p v-if="error" class="text-red-500 mt-3">{{ error }}</p>
        <p v-else class="text-red-500 mt-3">{{ forgetPassword }}</p>
    </section>
</template>
