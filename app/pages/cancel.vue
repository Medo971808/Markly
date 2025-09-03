<script setup lang="ts">
useSeoMeta({
    title: 'Cancel',
})
</script>

<template>
    <section class="flex flex-col items-center justify-center min-h-screen text-white px-4">
        <div class="bg-white rounded-3xl shadow-xl p-10 max-w-lg text-center text-gray-800">
            <svg class="w-20 h-20 mx-auto mb-6 text-red-500" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <h1 class="text-3xl font-bold mb-4">Payment Canceled</h1>
            <p class="mb-6 text-gray-600">
                You canceled the payment. You can return to the shop and try again.
            </p>
            <NuxtLink to="/products"
                class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition">
                Back to Shop
            </NuxtLink>
        </div>
    </section>
</template>