<template>
    <nav class="flex justify-between items-center bg-black px-6 py-3 border-b border-dashed border-zinc-700">
        <section class="flex items-center space-x-3">
            <NuxtLink class="cursor-pointer bg-zinc-900 text-white px-3 py-1 rounded" to="/">Home</NuxtLink>
            <NuxtLink class="cursor-pointer border border-dashed border-zinc-700 text-zinc-500 px-3 py-1 rounded" to="/products">Products</NuxtLink>
        </section>
        <section class="text-white font-semibold text-3xl">
            <span class="font-normal">Markly</span>
        </section>
        <section class="flex items-center space-x-3">
            <NuxtLink class="cursor-pointer bg-zinc-900 p-2 rounded" to="/shop">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
                    class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 18h8.8a1 1 0 00.95-1.3L17 13M7 13V6h13" />
                </svg>
            </NuxtLink>
            <NuxtLink class="cursor-pointer bg-[#AE9B84] text-black px-4 py-1 rounded font-medium" to="/contact">Contact</NuxtLink>
        </section>
    </nav>
</template>
