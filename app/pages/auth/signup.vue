<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const name = ref('')
const email = ref('')
const password = ref('')

const { signupWithEmail, signupWithGoogle, error, loading } = useSignup()

const handleEmailSignup = async () => {
  if (!name.value || !email.value || !password.value) {
    alert('Please fill all fields')
    return
  }

  const u = await signupWithEmail(email.value, password.value, name.value)
  if (u) {
    navigateTo('/')
  }
}

const handleGoogleSignup = async () => {
  const u = await signupWithGoogle()
  if (u) {
    navigateTo('/')
  }
}
</script>

<template>
    <section class="mt-5 md:mt-0">
        <h1 class="text-3xl md:tracking-widest">Create an account</h1>
        <p class="md:mt-2 mt-3 mb-5">Enter your details below</p>
        <input type="text" v-model="name"
            class="bg-black border-b border-white block w-full mb-5 py-5 pl-2 h-10 focus:outline-none"
            placeholder="Name" />
        <input type="email" v-model="email"
            class="bg-black border-b border-white block w-full mb-5 py-5 pl-2 h-10 focus:outline-none"
            placeholder="Email" />
        <input type="password" v-model="password"
            class="bg-black border-b border-white block w-full mb-5 py-5 pl-2 h-10 focus:outline-none"
            placeholder="Password" />

        <section class="flex justify-between items-center mb-5">
            <button class="bg-[#DB4444] w-full h-12 rounded-lg hover:bg-[#DB5555]" @click="handleEmailSignup"
                :disabled="loading">
                Create Account
            </button>
        </section>
        <button :disabled="loading"
            class="flex items-center justify-center h-12 gap-2 px-4 py-2 bg-[#1A1A1A] border rounded-lg shadow w-full hover:bg-gray-800 transition"
            @click="handleGoogleSignup">
            <FontAwesomeIcon :icon="['fab', 'google']" class="text-2xl transition-colors" />
            Sign up with Google
        </button>
        <section class="flex justify-center items-center mt-2 ">
            <p class="text-center">Already have account?</p>
            <NuxtLink to="/auth/login" class=" underline ml-3">Log In</NuxtLink>
        </section>
        <p v-if="error" class="text-red-500 mt-3">{{ error }}</p>
    </section>
</template>