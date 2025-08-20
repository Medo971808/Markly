<template>
    <section class="bg-black text-white px-6 pb-5 pt-20">
        <section class="border border-dashed border-zinc-700 rounded-3xl">
            <h1 class="text-5xl m-10 uppercase">Elevate Your Style with Our Latest Collection</h1>
            <p class="mt-5 text-[#676665] ml-10">Each piece is crafted to enhance your fashion statement.</p>
            <section class="ml-10 mt-10">
                <button class="w-16 h-10 border border-dashed border-zinc-700 rounded-lg">All</button>
                <button class="w-16 h-10 border border-dashed border-zinc-700 ml-2 rounded-lg">Men</button>
                <button class="w-24 h-10 bg-[#C2B4A3] text-[#0F0F0F] mx-2 rounded-lg">Women</button>
                <button class="w-16 h-10 border border-dashed border-zinc-700 rounded-lg">Kids</button>
            </section>
            <section class="grid grid-cols-3">
                <section class="p-4 border-t border-r border-dashed border-zinc-700 mt-10 flex items-center flex-col">
                    <NuxtImg src="/images/Product1.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border border-dashed border-zinc-700">Womenswear</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class=" w-full">
                        <p class="text-xl text-left">Timeless A-line Evening Dress</p>
                        <section class="flex items-center">
                            <p class="mr-10 text-[#81807E] text-[14px]">Fit: <span class="text-white text-[16px]">Ankle-length</span></p>
                            <p class="text-[#81807E] text-[14px]">Price: <span class="text-white text-[16px]">$109.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t border-r border-dashed border-zinc-700 mt-10 flex items-center flex-col">
                    <NuxtImg src="/images/Product2.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border border-dashed border-zinc-700">Womenswear</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class=" w-full">
                        <p class="text-xl text-left">Floral Bloom Maxi Dress</p>
                        <section class="flex items-center">
                            <p class="mr-10 text-[#81807E] text-[14px]">Fit: <span class="text-white text-[16px]">Slim Fit</span></p>
                            <p class="text-[#81807E] text-[14px]">Price: <span class="text-white text-[16px]">$54.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t border-dashed border-zinc-700 mt-10 flex items-center flex-col">
                    <NuxtImg src="/images/Product3.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border border-dashed border-zinc-700">Womenswear</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class=" w-full">
                        <p class="text-xl text-left">Elegant Evening Gown</p>
                        <section class="flex items-center">
                            <p class="mr-10 text-[#81807E] text-[14px]">Fit: <span class="text-white text-[16px]">Flowing skirt</span></p>
                            <p class="text-[#81807E] text-[14px]">Price: <span class="text-white text-[16px]">$89.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t border-r border-dashed border-zinc-700 flex items-center flex-col">
                    <NuxtImg src="/images/Product4.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border border-dashed border-zinc-700">Accessories</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class=" w-full">
                        <p class="text-xl text-left">Urban Chic Handbag</p>
                        <section class="flex items-center">
                            <p class="mr-10 text-[#81807E] text-[14px]">Fit: <span class="text-white text-[16px]">Spacious</span></p>
                            <p class="text-[#81807E] text-[14px]">Price: <span class="text-white text-[16px]">$49.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t border-r border-dashed border-zinc-700 flex items-center flex-col">
                    <NuxtImg src="/images/Product5.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border border-dashed border-zinc-700">Accessories</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class=" w-full">
                        <p class="text-xl text-left">Sophisticate Sun Hat</p>
                        <section class="flex items-center">
                            <p class="mr-10 text-[#81807E] text-[14px]">Fit: <span class="text-white text-[16px]">One size fits all</span></p>
                            <p class="text-[#81807E] text-[14px]">Price: <span class="text-white text-[16px]">$24.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t border-dashed border-zinc-700 flex items-center flex-col">
                    <NuxtImg src="/images/Product6.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border border-dashed border-zinc-700">Womenswear</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class=" w-full">
                        <p class="text-xl text-left">Boho Chic Printed Scarf</p>
                        <section class="flex items-center">
                            <p class="mr-10 text-[#81807E] text-[14px]">Fit: <span class="text-white text-[16px]">Lightweight</span></p>
                            <p class="text-[#81807E] text-[14px]">Price: <span class="text-white text-[16px]">$19.99</span></p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>