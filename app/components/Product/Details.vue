<template>
    <section class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <section class="flex flex-col m-10">
            <h1 class="text-3xl md:text-5xl uppercase">Elegant Evening Gown</h1>
            <span class="mt-2 text-[#676665]">Fitted bodice, flowing skirt</span>
            <span class="inline-block mt-2 bg-[#152011] text-[#8AF265] rounded-xl w-24 text-center">In stock</span>
            <section class="mt-5 flex md:hidden">
                <NuxtLink to="/cart" class="mr-5 w-32 h-12 rounded-xl bg-[#1F1F1F] border-dashed border-[#262626] border-[3px]
                    flex items-center justify-center text-white font-medium
                    transition-all duration-300 ease-in-out
                    hover:bg-[#2a2a2a] hover:scale-105 hover:shadow-lg hover:border-[#C2B4A3]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="white" class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 18h8.8a1 1 0 00.95-1.3L17 13M7 13V6h13" />
                    </svg>
                    Add To Cart
                </NuxtLink>
                <NuxtLink to="/shop" class="mr-5 w-32 h-12 rounded-xl bg-[#C2B4A3] flex items-center justify-center text-black font-medium
                transition-all duration-300 ease-in-out
                hover:bg-gradient-to-r hover:from-[#C2B4A3] hover:to-[#E5D5C5]
                hover:scale-105 hover:shadow-lg hover:shadow-[#C2B4A3]/40">
                    <NuxtImg src="images/icons/bag.png" class="w-5 mr-1" />
                    Shop Now
                </NuxtLink>
            </section>
        </section>
        <section class="px-10 hidden md:flex">
            <NuxtLink to="/cart" class="mr-5 w-32 h-12 rounded-xl bg-[#1F1F1F] border-dashed border-[#262626] border-[3px]
         flex items-center justify-center text-white font-medium
         transition-all duration-300 ease-in-out
         hover:bg-[#2a2a2a] hover:scale-105 hover:shadow-lg hover:border-[#C2B4A3]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
                    class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 18h8.8a1 1 0 00.95-1.3L17 13M7 13V6h13" />
                </svg>
                Add To Cart
            </NuxtLink>
            <NuxtLink to="/shop" class="mr-5 w-32 h-12 rounded-xl bg-[#C2B4A3] flex items-center justify-center text-black font-medium
         transition-all duration-300 ease-in-out
         hover:bg-gradient-to-r hover:from-[#C2B4A3] hover:to-[#E5D5C5]
         hover:scale-105 hover:shadow-lg hover:shadow-[#C2B4A3]/40">
                <NuxtImg src="images/icons/bag.png" class="w-5 mr-1" />
                Shop Now
            </NuxtLink>
        </section>
    </section>
    <section class="mt-10 border-dashed border-[#262626] border-t-[5px] border-b-[5px] grid md:grid-cols-2">
        <section
            class="md:flex items-center md:border-r-[5px] border-dashed border-[#262626] md:p-10 p-5 border-b-[5px] md:border-b-0">
            <NuxtImg src="images/productDetails/Product1.png" class="md:w-[682px] w-full md:h-[451px]" />
        </section>
        <section class="flex items-center flex-col justify-center py-10">
            <NuxtImg src="images/productDetails/Product2.png" class="md:w-[518px] md:h-[215.5px] mb-5" />
            <NuxtImg src="images/productDetails/Product3.png" class="md:w-[518px] md:h-[215.5px]" />
        </section>
    </section>
    <section class="border-b-[5px] border-dashed border-[#262626]">
        <section class="grid md:grid-cols-2">
            <section
                class="md:border-r-[5px] border-b-[5px] md:border-b-0 border-dashed border-[#262626] grid grid-rows-2">
                <h1 class="text-3xl m-10">Materials, Care and origin</h1>
                <section class="border-t-[5px] border-dashed border-[#262626] p-10">
                    <h3 class="text-xl font-bold">Join Life</h3>
                    <p class="text-[#81807E] mt-3">Tracing its roots back to ancient Greek draped garments, has
                        evolved through centuries, often crafted from luxurious fabrics like silks, satins, and
                        velvets.</p>
                </section>
            </section>
            <section class="py-10 md:px-20 px-10">
                <h1 class="text-3xl">Features</h1>
                <ul class="list-disc pl-6 mt-10 text-[#81807E]">
                    <li>Distressed detailing for a rugged look</li>
                    <li>Button-up front closure with engraved metal buttons</li>
                    <li>Two chest pockets with buttoned flaps</li>
                    <li>Two side pockets for added functionality</li>
                    <li>Adjustable buttoned cuffs for a personalized fit</li>
                    <li>Back waist tabs for customizable styling</li>
                </ul>
            </section>
        </section>
    </section>
</template>