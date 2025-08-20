<template>
    <section class="bg-black text-white px-6 py-5">
        <section class="rounded-3xl relative border border-zinc-700 border-dashed">
            <NuxtImg src="/images/Image.png"alt=""class="h-auto w-full rounded-t-lg" />
            <NuxtLink to="/shop" class="cursor-pointer absolute top-auto left-1/2 lg:top-[485px] lg:left-[46%] w-[128px] h-[49px] rounded-xl text-14 bg-[#1F1F1F] border border-dashed border-zinc-700 flex items-center justify-center">Shop Now</NuxtLink>
            <section class="flex justify-between text-[#B3B3B2]">
                <section class="py-10 px-5 border-r border-zinc-700 border-dashed w-[50%]">
                    <button class="w-12 h-10 border border-dashed border-zinc-700 rounded-lg">All</button>
                    <button class="w-12 h-10 border border-dashed border-zinc-700 ml-2 rounded-lg">Men</button>
                    <button class=" w-20 h-10 border border-dashed border-zinc-700 mx-2 rounded-lg">Women</button>
                    <button class="w-12 h-10 border border-dashed border-zinc-700 rounded-lg">Kids</button>
                    <h1 class="text-6xl my-5 text-white">ElEVATE YOUR STYLE WITH MARKLY</h1>
                    <p class="text-[#676665]">Explore a world of fashion at StyleLoom, where trends meet affordability. 
                        Immerse yourself in the latest styles and seize exclusive promotions.</p>
                </section>
                <section class="border-zinc-700 border-dashed w-[50%] grid grid-cols-2">
                    <section class="flex flex-col justify-center items-center gap-2 border-b border-r border-zinc-700 border-dashed">
                        <h2 class="text-5xl text-white">1,500 +</h2>
                        <p>Fashion Products</p>
                    </section>
                    <section class="flex flex-col justify-center items-center gap-2 border-b border-zinc-700 border-dashed">
                        <h2 class="text-5xl text-white">50 +</h2>
                        <p>New arrivals every month.</p>
                    </section>
                    <section class="flex flex-col justify-center items-center gap-2 border-r border-zinc-700 border-dashed">
                        <h2 class="text-5xl text-white">30%</h2>
                        <p>OFF on select items.</p>
                    </section>
                    <section class="flex flex-col justify-center items-center gap-2">
                        <h2 class="text-5xl text-white">95%</h2>
                        <p>Customer Satisfaction Rate</p>
                    </section>
                </section>
            </section>
        </section>    
    </section>
</template>