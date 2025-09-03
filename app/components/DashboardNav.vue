<script setup>
import { ref } from "vue"
const isOpen = ref(false)

const links = [
    { name: "Home", to: "/dashboard" },
    { name: "Products", to: "/dashboard/products" },
    { name: "Users", to: "/dashboard/users" }
]
</script>

<template>
    <section>
        <button class="lg:hidden fixed z-50 text-white p-2 w-full"
            :class="isOpen ? 'bg-none' : 'bg-gray-700'"
            @click="isOpen = !isOpen">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <aside :class="[
            'fixed top-0 left-0 h-full bg-gray-900 text-white p-4 transition-transform duration-300 z-40 w-[80%] lg:w-60',
            isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        ]">
            <section class="mb-8 flex items-center space-x-2">
                <span class="text-2xl font-bold">⚡ Admin</span>
            </section>
            <nav class="lg:pt-5">
                <ul class="space-y-2">
                    <li v-for="link in links" :key="link.to">
                        <NuxtLink :to="link.to"
                            class="flex items-center p-2 rounded-lg hover:bg-gray-700 transition mb-2"
                            active-class="bg-gray-800" @click="isOpen = false">
                            <span>{{ link.name }}</span>
                        </NuxtLink>
                    </li>
                </ul>
                <hr class=" opacity-30">
                <NuxtLink to="/"
                    class="flex items-center p-2 rounded-lg hover:bg-gray-700 transition mt-2"
                    active-class="bg-gray-800" @click="isOpen = false">
                    <span>Back to home page</span>
                </NuxtLink>
            </nav>
        </aside>
    </section>
    <section v-if="isOpen" class="fixed inset-0 bg-black/40 z-30 lg:hidden" @click="isOpen = false"></section>
</template>
