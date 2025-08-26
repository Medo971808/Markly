<template>
    <section class="flex flex-col items-center justify-center min-h-screen text-white px-4">
        <section class="bg-white rounded-3xl shadow-xl p-10 max-w-lg text-center text-gray-800">
            <svg class="w-20 h-20 mx-auto mb-6 text-green-500" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            <h1 class="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p class="mb-6 text-gray-600">
                Thank you for your order. Your payment has been processed successfully.
            </p>
            <NuxtLink to="/"
                class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition">
                Back to Home
            </NuxtLink>
        </section>
    </section>
</template>