<template>
    <section class="text-white px-6 py-5 h-full">
        <section class="relative">
            <NuxtImg src="/images/Image.png" alt="" class="h-auto w-full rounded-t-lg" />
            <NuxtLink to="/shop"
                class="cursor-pointer absolute left-1/2 lg:top-[485px] lg:left-[46%] lg:w-[128px] w-[110px] lg:h-[49px] h-[40px] rounded-xl text-10 lg:text-14 bg-[#1F1F1F] border-[5px] border-dashed border-zinc-700 flex items-center justify-center">
                Shop Now</NuxtLink>
            <section class="lg:flex justify-between text-[#B3B3B2]">
                <section class="py-10 px-5 border-x-[5px] lg:border-x-0 lg:border-l-[5px] border-b-[5px] lg:rounded-bl-3xl border-zinc-700 border-dashed lg:w-[50%]">
                    <button class="w-16 h-10 border-dashed border-zinc-700 border-[3px] rounded-lg">All</button>
                    <button class="w-16 h-10 border-[3px] border-dashed border-zinc-700 ml-2 rounded-lg">Men</button>
                    <button class="w-24 h-10 bg-[#C2B4A3] text-[#0F0F0F] mx-2 rounded-lg">Women</button>
                    <button
                        class="w-16 h-10 border-[3px] border-dashed border-zinc-700 rounded-lg mt-3 md:mt-0">Kids</button>
                    <h1 class="text-3xl lg:text-6xl my-5 text-white">ElEVATE YOUR STYLE WITH MARKLY</h1>
                    <p class="text-[#676665]">Explore a world of fashion at StyleLoom, where trends meet affordability.
                        Immerse yourself in the latest styles and seize exclusive promotions.</p>
                </section>
                <section class="text-center border-x-[5px] border-b-[5px] rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none border-zinc-700 border-dashed lg:w-[50%] grid grid-cols-2">
                    <section
                        class="flex flex-col justify-center items-center gap-2 border-b-[5px] border-r-[5px] border-zinc-700 border-dashed px-2 py-5 md:p-0">
                        <h2 class="text-3xl md:text-5xl text-white">1,500 +</h2>
                        <p>Fashion Products</p>
                    </section>
                    <section
                        class="flex flex-col justify-center items-center gap-2 border-b-[5px] border-zinc-700 border-dashed px-2 py-5 md:p-0">
                        <h2 class="text-3xl md:text-5xl text-white">50 +</h2>
                        <p>New arrivals every month.</p>
                    </section>
                    <section
                        class="flex flex-col justify-center items-center gap-2 border-r-[5px] border-zinc-700 border-dashed px-2 py-5 md:p-0">
                        <h2 class="text-3xl md:text-5xl text-white">30%</h2>
                        <p>OFF on select items.</p>
                    </section>
                    <section class="flex flex-col justify-center items-center gap-2 px-2 py-5 md:p-0">
                        <h2 class="text-3xl md:text-5xl text-white">95%</h2>
                        <p>Customer Satisfaction Rate</p>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>