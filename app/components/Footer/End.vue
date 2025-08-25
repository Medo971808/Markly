<template>
    <section class="text-white">
        <section class="px-6 pb-5 pt-20 mb-20">
            <section
                class="bg-[#C2B4A3] h-[367px] md:h-[278px] text-black md:flex justify-between rounded-3xl items-center p-1 md:p-0">
                <section class="md:w-[70%]">
                    <h1 class="uppercase text-xl md:text-3xl mx-10 mt-10 font-bold">elevate your wardrobe</h1>
                    <p class="my-5 ml-10 mr-10">Don't miss out - experience the epitome of fashion by clicking 'Buy Now'
                        and
                        embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.</p>
                </section>
                <section class="md:w-[30%] flex justify-center items-center">
                    <NuxtLink to="/products" class="bg-[#1F1F1F] p-4 rounded-xl flex justify-center items-center
                text-white font-medium transition-all duration-300 w-[80%]
                hover:bg-[#AE9B84] hover:text-black hover:scale-105 hover:shadow-lg">
                        Shop Now
                    </NuxtLink>
                </section>
            </section>
        </section>
        <section class="mb-20 h-full hidden lg:block">
            <section
                class="border-t-[5px] border-b-[5px] border-dashed border-[#262626] py-5 flex items-center justify-center">
                <nuxt-img src="/images/icons/image.png" class="w-12" />
                <p class="mx-5 text-[#333333] uppercase text-xl">T-Shirt</p>
                <nuxt-img src="/images/icons/image.png" class="w-12" />
                <p class="mx-5 text-[#333333] uppercase text-xl">Long-Sleeve T-Shir</p>
                <nuxt-img src="/images/icons/image.png" class="w-12" />
                <p class="mx-5 text-[#333333] uppercase text-xl">Raglan Sleeve Shirt</p>
                <nuxt-img src="/images/icons/image.png" class="w-12" />
                <p class="mx-5 text-[#333333] uppercase text-xl">Crop Top</p>
                <nuxt-img src="/images/icons/image.png" class="w-12" />
                <p class="mx-5 text-[#333333] uppercase text-xl">V-Neck Shirt</p>
                <nuxt-img src="/images/icons/image.png" class="w-12" />
                <p class="mx-5 text-[#333333] uppercase text-xl">Muscle Shirt</p>
            </section>
        </section>
        <section class="md:flex justify-center items-center mb-20 bg">
            <section class="md:flex justify-between md:w-[70%] text-center">
                <h1 class="text-[6rem]" style="font-family: 'Pacifico', cursive;">Markly</h1>
            </section>
            <section class="flex gap-4 px-6 md:p-4 mt-5 md:mt-0">
                <section class="w-12 h-12 bg-[#D6CEC3] rounded-md flex justify-center items-center 
                transition-all duration-300 hover:bg-[#AE9B84] hover:scale-110 shadow-md cursor-pointer">
                    <a href="https://www.instagram.com/" target="_blank">
                            <FontAwesomeIcon :icon="['fab', 'instagram']"
                                class="text-black text-2xl hover:text-white transition-colors" />
                    </a>
                </section>

                <section class="w-12 h-12 bg-[#D6CEC3] rounded-md flex justify-center items-center 
                transition-all duration-300 hover:bg-[#AE9B84] hover:scale-110 shadow-md cursor-pointer">
                    <a href="https://dribbble.com/" target="_blank">
                            <FontAwesomeIcon :icon="['fab', 'dribbble']"
                            class="text-black text-2xl hover:text-white transition-colors" />
                    </a>
                </section>

                <section class="w-12 h-12 bg-[#D6CEC3] rounded-md flex justify-center items-center 
                transition-all duration-300 hover:bg-[#AE9B84] hover:scale-110 shadow-md cursor-pointer">
                    <a href="https://x.com/" target="_blank">
                            <FontAwesomeIcon :icon="['fab', 'twitter']"
                                class="text-black text-2xl hover:text-white transition-colors" />

                    </a>
                </section>

                <section class="w-12 h-12 bg-[#D6CEC3] rounded-md flex justify-center items-center 
                transition-all duration-300 hover:bg-[#AE9B84] hover:scale-110 shadow-md cursor-pointer">
                    <a href="https://www.behance.net/" target="_blank">
                            <FontAwesomeIcon :icon="['fab', 'behance']"
                                class="text-black text-2xl hover:text-white transition-colors" />
                    </a>
                </section>
            </section>
        </section>
        <section class="border-t-[5px] border-b-[5px] border-dashed border-[#262626] px-6 py-12 grid md:grid-cols-3">
            <section>
                <p>Home</p>
                <section class="flex gap-6 text-[#676665] mt-5">
                    <ul class="flex space-x-4">
                        <li class="flex items-center hover:text-[#AE9B84] cursor-pointer">Why Us</li>
                        <li class="flex items-center before:content-['•'] before:mx-2 before:text-[#AE9B84] hover:text-[#AE9B84] cursor-pointer">
                            <NuxtLink to="/about-us">About Us</NuxtLink>
                        </li>
                        <li class="flex items-center before:content-['•'] before:mx-2 before:text-[#AE9B84] hover:text-[#AE9B84] cursor-pointer">Testimonials</li>
                        <li class="flex items-center before:content-['•'] before:mx-2 before:text-[#AE9B84] hover:text-[#AE9B84] cursor-pointer">FAQ's</li>
                    </ul>
                </section>
            </section>
            <section class="mt-10 md:mt-0">
                <p>Products</p>
                <section class="flex gap-6 text-[#676665] mt-5">
                    <ul class="flex space-x-4">
                        <li class="flex items-center hover:text-[#AE9B84] cursor-pointer">Menswear</li>
                        <li class="flex items-center before:content-['•'] before:mx-2 before:text-[#AE9B84] hover:text-[#AE9B84] cursor-pointer">Womenswear</li>
                        <li class="flex items-center before:content-['•'] before:mx-2 before:text-[#AE9B84] hover:text-[#AE9B84] cursor-pointer">Kidswear</li>
                    </ul>
                </section>
            </section>
            <section class="mt-10 md:mt-0">
                <p>Subscribe to Newsletter</p>
                <section class="flex items-center mt-5 bg-[#1A1A1A] w-[80%] h-10 rounded-lg">
                    <input type="email" placeholder="Your Email"
                        class="h-full w-[90%] bg-[#1A1A1A] px-6 outline-none rounded-l-lg" />
                    <button class="bg-[#1A1A1A] hover:bg-[#4A4A4A] h-full w-10 rounded-r-lg">
                        <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="text-[#AE9B84]" />
                    </button>
                </section>
            </section>
        </section>
        <section class="px-6 py-12 md:flex justify-between tracking-widest text-[#81807E]">
            <p class="mb-5 md:mb-0">&copy; 2025 Markly. All rights reserved.</p>
            <span>Terms & Conditions <span class="text-[#262626]">|</span> Privacy Policy</span>
        </section>
    </section>
</template>