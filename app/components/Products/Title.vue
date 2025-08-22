<template>
    <h1 class="text-3xl lg:text-5xl m-10 uppercase">Explore the Latest Trends and Timeless Classics</h1>
    <p class="mt-5 text-[#676665] ml-10">Dive into the world of fashion excellence at StyleLoom. Our curated selection
        brings together the latest trends and timeless classics</p>
    <section class="ml-10 mt-10 flex flex-wrap gap-5">
        <button class="w-16 h-10 border-dashed border-[#262626] border-[3px] rounded-lg">All</button>
        <button class="w-16 h-10 border-[3px] border-dashed border-[#262626] rounded-lg">Men</button>
        <button class="w-24 h-10 bg-[#C2B4A3] text-[#0F0F0F] rounded-lg">Women</button>
        <button
            class="w-16 h-10 border-[3px] border-dashed border-[#262626] rounded-lg basis-[60%] md:basis-auto">Kids</button>
    </section>
    <section class="flex items-center justify-between px-5 py-10 mt-10 border-t-[5px] border-[#262626] border-dashed">
        <h3 class="text-2xl md:text-3xl uppercase">Dress Collection</h3>
        <NuxtLink to="/"
            class="w-32 bg-[#1F1F1F] flex justify-center items-center h-12 rounded-lg border-[3px] border-dashed border-[#262626]">
            View All</NuxtLink>
    </section>
    <section class="grid md:grid-cols-2 lg:grid-cols-3">
        <section class="p-4 border-t-[5px] md:border-r-[5px] border-dashed border-[#262626] flex items-center flex-col">
            <NuxtImg src="/images/products/Product6.png" class="w-full h-auto mb-2" />
            <section class="flex justify-between items-center w-full">
                <label
                    class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-[#262626]">Womenswear</label>
                <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">
                    Shop Now</NuxtLink>
            </section>
            <section class="w-full">
                <p class="text-2xl font-bold mt-5 text-left xl:my-3">Timeless A-line Evening Dress</p>
                <section class="flex items-center justify-between mt-2">
                    <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl"> Ankle-length</span></p>
                    <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$109.99</span></p>
                </section>
            </section>
        </section>
        <section
            class="p-4 border-t-[5px] lg:border-r-[5px] md:border-b-[5px] lg:border-b-0 border-dashed border-[#262626] flex items-center flex-col">
            <NuxtImg src="/images/products/Product2.png" class="w-full h-auto mb-2" />
            <section class="flex justify-between items-center w-full">
                <label
                    class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-[#262626]">Womenswear</label>
                <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">
                    Shop Now</NuxtLink>
            </section>
            <section class="w-full">
                <p class="text-2xl font-bold mt-5 text-left xl:my-3">Floral Bloom Maxi Dress</p>
                <section class="flex items-center justify-between mt-2">
                    <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl"> Slim Fit</span></p>
                    <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$54.99</span></p>
                </section>
            </section>
        </section>
        <section
            class="p-4 border-t-[5px] md:border-r-[5px] lg:border-r-0 border-dashed border-[#262626] flex items-center flex-col">
            <NuxtImg src="/images/products/Product3.png" class="w-full h-auto mb-2" />
            <section class="flex justify-between items-center w-full">
                <label
                    class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-[#262626]">Womenswear</label>
                <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">
                    Shop Now</NuxtLink>
            </section>
            <section class="w-full">
                <p class="text-2xl font-bold mt-5 text-left xl:my-3">Elegant Evening Gown</p>
                <section class="flex items-center justify-between mt-2">
                    <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl">Flowing skirt</span></p>
                    <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$89.99</span></p>
                </section>
            </section>
        </section>
    </section>
</template>