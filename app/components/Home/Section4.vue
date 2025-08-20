<template>
    <section class="text-white px-6 pb-5 pt-20 h-full">
        <section class="border-dashed border-zinc-700 border-[5px] rounded-3xl">
            <h1 class="text-3xl lg:text-5xl m-10 uppercase">Elevate Your Style with Our Latest Collection</h1>
            <p class="mt-5 text-[#676665] ml-10">Each piece is crafted to enhance your fashion statement.</p>
            <section class="ml-10 mt-10">
                <button class="w-16 h-10 border-dashed border-zinc-700 border-[3px] rounded-lg">All</button>
                <button class="w-16 h-10 border-[3px] border-dashed border-zinc-700 ml-2 rounded-lg">Men</button>
                <button class="w-24 h-10 bg-[#C2B4A3] text-[#0F0F0F] mx-2 rounded-lg">Women</button>
                <button class="w-16 h-10 border-[3px] border-dashed border-zinc-700 rounded-lg mt-3 md:mt-0">Kids</button>
            </section>
            <section class="grid md:grid-cols-2 lg:grid-cols-3">
                <section class="p-4 border-t-[5px] md:border-r-[5px] border-dashed border-zinc-700 mt-10 flex items-center flex-col">
                    <NuxtImg src="/images/Product1.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-zinc-700">Womenswear</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class="w-full">
                        <p class="text-2xl font-bold text-left xl:my-3">Timeless A-line Evening Dress</p>
                        <section class="flex items-center justify-between mt-2">
                            <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl"> Ankle-length</span></p> 
                            <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$109.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t-[5px] lg:border-r-[5px] border-dashed border-zinc-700 md:mt-10 flex items-center flex-col">
                    <NuxtImg src="/images/Product2.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-zinc-700">Womenswear</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class="w-full">
                        <p class="text-2xl font-bold text-left xl:my-3">Floral Bloom Maxi Dress</p>
                        <section class="flex items-center justify-between mt-2">
                            <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl"> Slim Fit</span></p> 
                            <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$54.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t-[5px] md:border-r-[5px] lg:border-r-0 border-dashed border-zinc-700 lg:mt-10 flex items-center flex-col">
                    <NuxtImg src="/images/Product3.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-zinc-700">Womenswear</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class="w-full">
                        <p class="text-2xl font-bold text-left xl:my-3">Elegant Evening Gown</p>
                        <section class="flex items-center justify-between mt-2">
                            <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl"> Flowing skirt</span></p> 
                            <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$89.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t-[5px] lg:border-r-[5px] border-dashed border-zinc-700 flex items-center flex-col">
                    <NuxtImg src="/images/Product4.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-zinc-700">Accessories</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class="w-full">
                        <p class="text-2xl font-bold text-left xl:my-3">Urban Chic Handbag</p>
                        <section class="flex items-center justify-between mt-2">
                            <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl"> Spacious</span></p> 
                            <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$49.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t-[5px] md:border-r-[5px] border-dashed border-zinc-700 flex items-center flex-col">
                    <NuxtImg src="/images/Product5.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-zinc-700">Accessories</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class="w-full">
                        <p class="text-2xl font-bold text-left xl:my-3">Sophisticate Sun Hat</p>
                        <section class="flex items-center justify-between mt-2">
                            <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl"> One size fits all</span></p> 
                            <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$24.99</span></p>
                        </section>
                    </section>
                </section>
                <section class="p-4 border-t-[5px] border-dashed border-zinc-700 flex items-center flex-col">
                    <NuxtImg src="/images/Product6.png" class="w-full h-auto mb-2"/>
                    <section class="flex justify-between items-center w-full">
                        <label class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-zinc-700">Womenswear</label>
                        <NuxtLink to="/shop" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84]">Shop Now</NuxtLink>
                    </section>
                    <section class="w-full">
                        <p class="text-2xl font-bold text-left xl:my-3">Boho Chic Printed Scarf</p>
                        <section class="flex items-center justify-between mt-2">
                            <p class="text-[#81807E] text-xl">Fit:<span class="text-white text-xl"> Lightweight</span></p> 
                            <p class="text-[#81807E] text-xl">Price: <span class="text-white text-xl">$19.99</span></p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>