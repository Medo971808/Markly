<template>
    <section class="grid md:grid-cols-2">
        <section class="md:border-r-[5px] border-dashed border-[#262626]">
            <section class="border-b-[5px] border-dashed border-[#262626] p-10">
                <p class="text-xl font-bold">Materials</p>
                <p class="text-[#81807E] mt-3">Flowing from Grecian folds to glittering silks, the evening gown
                    has graced centuries in luxury.</p>
                <NuxtImg src="/images/productDetails/material.png" class="md:w-[520px] md:h-[311px] w-[90%] mt-10" />
            </section>
        </section>
        <section class="box-border">
            <section class="py-10 md:px-20 px-10 border-dashed border-[#262626] border-b-[5px]">
                <h2 class="text-xl font-bold">Price</h2>
                <section class="lg:flex items-center mt-5 justify-between">
                    <section class="flex items-center">
                        <h1 class="text-4xl mr-5">$89.99</h1>
                        <p class="text-[#81807E]">( MRP incl. of all taxes )</p>
                    </section>
                    <NuxtLink
                        class="mr-5 w-32 h-12 rounded-xl bg-[#1F1F1F] cursor-pointer border-dashed border-[#262626] border-[5px] flex items-center justify-center mt-5 md:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="white" class="w-5 h-5 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 18h8.8a1 1 0 00.95-1.3L17 13M7 13V6h13" />
                        </svg>
                        Add To Cart
                    </NuxtLink>
                </section>
            </section>
            <section class="py-10 md:px-20 px-10 border-dashed border-[#262626] border-b-[5px]">
                <h1 class="text-xl font-bold mb-5">Available Sizes</h1>
                <section class="flex gap-2 md:gap-5">
                    <button class="md:w-24 w-16 bg-[#1A1A1A] md:text-2xl rounded-2xl h-10 focus:bg-[#4A4A4A]">S</button>
                    <button class="md:w-24 w-16 bg-[#1A1A1A] md:text-2xl rounded-2xl h-10 focus:bg-[#4A4A4A]">M</button>
                    <button class="md:w-24 w-16 bg-[#1A1A1A] md:text-2xl rounded-2xl h-10 focus:bg-[#4A4A4A]">L</button>
                    <button
                        class="md:w-24 w-16 bg-[#1A1A1A] md:text-2xl rounded-2xl h-10 focus:bg-[#4A4A4A]">XL</button>
                </section>
            </section>
            <section class="py-10 md:px-20 px-10 text-xl font-bold border-dashed border-[#262626] border-b-[5px]">
                <h1>Rating & Review</h1>
            </section>
            <section class="grid grid-cols-2 py-10 md:px-20 px-10">
                <section>
                    <h1 class="text-4xl font-bold tracking-[0.2rem]">4.8</h1>
                    <section class="flex my-5">
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] text-sm md:text-md" />
                    </section>
                    <p class="text-[#81807E]">49 Ratings</p>
                </section>
                <section class="flex flex-col gap-3">
                    <section class="flex items-center">
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <p class="text-xl text-[#81807E] mx-2">05</p>
                        <section
                            class="flex-1 h-5 bg-[#1A1A1A] rounded-full overflow-hidden flex items-center border border-[#262626] px-2">
                            <section class="h-1 bg-[#AE9B84] w-5/6 rounded-full"></section>
                        </section>
                    </section>
                    <section class="flex items-center">
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <p class="text-xl text-[#81807E] mx-2">05</p>
                        <section
                            class="flex-1 h-5 bg-[#1A1A1A] rounded-full overflow-hidden flex items-center border border-[#262626] px-2">
                            <section class="h-1 bg-[#AE9B84] w-4/6 rounded-full"></section>
                        </section>
                    </section>
                    <section class="flex items-center">
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <p class="text-xl text-[#81807E] mx-2">05</p>
                        <section
                            class="flex-1 h-5 bg-[#1A1A1A] rounded-full overflow-hidden flex items-center border border-[#262626] px-2">
                            <section class="h-1 bg-[#AE9B84] w-3/6 rounded-full"></section>
                        </section>
                    </section>
                    <section class="flex items-center">
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <p class="text-xl text-[#81807E] mx-2">05</p>
                        <section
                            class="flex-1 h-5 bg-[#1A1A1A] rounded-full overflow-hidden flex items-center border border-[#262626] px-2">
                            <section class="h-1 bg-[#AE9B84] w-2/6 rounded-full"></section>
                        </section>
                    </section>
                    <section class="flex items-center">
                        <FontAwesomeIcon :icon="['fas', 'star']" class="text-[#FFCE22] mr-1 text-sm md:text-md" />
                        <p class="text-xl text-[#81807E] mx-2">05</p>
                        <section
                            class="flex-1 h-5 bg-[#1A1A1A] rounded-full overflow-hidden flex items-center border border-[#262626] px-2">
                            <section class="h-1 bg-[#AE9B84] w-1/6 rounded-full"></section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>