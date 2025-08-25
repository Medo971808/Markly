<script setup lang="ts">
import { NuxtImg } from '#components';

useSeoMeta({
    title: 'About Me - Markly',
    description: 'Learn more about me, my journey, and my vision.',
})

const me = {
    name: 'Mohamed Mohamed Abbas Abedy',
    role: 'Front End Developer',
    bio: 'I am a passionate front-end developer, dedicated to crafting sleek, responsive, and user-friendly web experiences. My focus is on combining design and functionality to bring ideas to life.',
    image: '/images/aboutUs/medo.jpg',
}
</script>

<template>
    <section class="text-white px-6 pb-5 pt-20">
        <section
            class="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6 lg:px-20">
            <NuxtImg :src="me.image" :alt="me.name" class="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl mb-6 transition-transform duration-300 hover:scale-105" />
            <h1 class="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide text-center">{{ me.name }}</h1>
            <p class="text-gray-400 text-xl md:text-2xl mb-6">{{ me.role }}</p>
            <p class="text-gray-300 max-w-3xl text-center text-lg md:text-xl leading-relaxed">
                {{ me.bio }}
            </p>
            <section class="mt-12 flex flex-wrap justify-center gap-4">
                <span class="bg-[#AE9B84] text-black px-4 py-2 rounded-lg font-medium">Vue / Nuxt</span>
            </section>
        </section>
    </section>
</template>

<style scoped>
section {
    scroll-margin-top: 80px;
}
</style>
