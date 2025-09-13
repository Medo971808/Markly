<template>
    <section class="text-white px-6 py-5 h-full mt-20">
        <section class="relative">
            <NuxtImg src="/images/Image.png" alt="Hero image" class="h-auto w-full rounded-t-3xl" loading="eager" decoding="async" fetchpriority="high"/>
            <section class="lg:flex justify-between text-[#B3B3B2]">
                <section class="py-10 px-5 border-x-[5px] lg:border-x-0 lg:border-l-[5px] border-b-[5px] lg:rounded-bl-3xl border-[#262626] border-dashed lg:w-[50%]">
                    <button class="w-16 h-10 border-dashed border-[#262626] border-[3px] rounded-lg">All</button>
                    <button class="w-24 h-10 border-[3px] border-dashed border-[#262626] ml-2 rounded-lg">Men</button>
                    <button class="w-24 h-10 bg-[#C2B4A3] text-[#0F0F0F] mx-2 rounded-lg">Women</button>
                    <button
                        class="w-16 h-10 border-[3px] border-dashed border-[#262626] rounded-lg mt-3 md:mt-0">Kids</button>
                    <h1 class="text-xl md:text-3xl my-5 text-white">ElEVATE YOUR STYLE WITH MARKLY</h1>
                    <p class="text-[#81C784]">Explore a world of fashion at Markly, where trends meet affordability.
                        Immerse yourself in the latest styles and seize exclusive promotions.</p>
                </section>
                <section class="text-center border-x-[5px] border-b-[5px] rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none border-[#262626] border-dashed lg:w-[50%] grid grid-cols-2">
                    <section
                        class="flex flex-col justify-center items-center gap-2 border-b-[5px] border-r-[5px] border-[#262626] border-dashed px-2 py-5 md:p-0">
                        <h2 class="text-3xl md:text-5xl text-white">1,500 +</h2>
                        <p>Fashion Products</p>
                    </section>
                    <section
                        class="flex flex-col justify-center items-center gap-2 border-b-[5px] border-[#262626] border-dashed px-2 py-5 md:p-0">
                        <h2 class="text-3xl md:text-5xl text-white">50 +</h2>
                        <p>New arrivals every month.</p>
                    </section>
                    <section
                        class="flex flex-col justify-center items-center gap-2 border-r-[5px] border-[#262626] border-dashed px-2 py-5 md:p-0">
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