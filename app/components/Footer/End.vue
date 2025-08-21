<template>
    <section class="text-white">
        <section class="px-6 pb-5 pt-20 mb-20">
            <section
                class="bg-[#C2B4A3] h-[367px] md:h-[278px] text-black md:flex justify-between rounded-3xl items-center p-1 md:p-0">
                <section class="md:w-[70%]">
                    <h1 class="uppercase lg:text-5xl text-2xl mx-10 mt-10 font-bold">elevate your wardrobe</h1>
                    <p class="my-5 ml-10 mr-10">Don't miss out - experience the epitome of fashion by clicking 'Buy Now'
                        and
                        embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.</p>
                </section>
                <section class="md:w-[30%] flex justify-center items-center">
                    <nuxt-link src="/shop"
                        class="w-[95%] text-white cursor-pointer md:w-40 h-12 md:h-10 flex items-center justify-center bg-[#1F1F1F] rounded-lg">Shop
                        Now</nuxt-link>
                </section>
            </section>
        </section>
        <section class="mb-20 h-full hidden lg:block">
            <section
                class="border-t-[5px] border-b-[5px] border-dashed border-zinc-700 py-5 flex items-center justify-center">
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
                <section class="w-12 h-12 bg-[#D6CEC3] rounded-md flex justify-center items-center">
                    <a href="https://www.instagram.com/">
                        <FontAwesomeIcon :icon="['fab', 'instagram']" class="text-black text-2xl" />
                    </a>
                </section>
                <section class="w-12 h-12 bg-[#D6CEC3] rounded-md flex justify-center items-center">
                    <a href="https://dribbble.com/">
                        <FontAwesomeIcon :icon="['fab', 'dribbble']" class="text-black text-2xl" />
                    </a>
                </section>
                <section class="w-12 h-12 bg-[#D6CEC3] rounded-md flex justify-center items-center">
                    <a href="https://x.com/">
                        <FontAwesomeIcon :icon="['fab', 'twitter']" class="text-black text-2xl" />
                    </a>
                </section>
                <section class="w-12 h-12 bg-[#D6CEC3] rounded-md flex justify-center items-center">
                    <a href="https://www.behance.net/">
                        <FontAwesomeIcon :icon="['fab', 'behance']" class="text-black text-2xl" />
                    </a>
                </section>
            </section>
        </section>
        <section class="border-t-[5px] border-b-[5px] border-dashed border-zinc-700 px-6 py-12 grid md:grid-cols-3">
            <section>
                <p>Home</p>
                <section class="flex gap-6 text-[#676665] mt-5">
                    <ul class="flex space-x-4">
                        <li class="flex items-center">Why Us</li>
                        <li class="flex items-center before:content-['•'] before:mx-2">About Us</li>
                        <li class="flex items-center before:content-['•'] before:mx-2">Testimonials</li>
                        <li class="flex items-center before:content-['•'] before:mx-2">FAQ's</li>
                    </ul>
                </section>
            </section>
            <section class="mt-10 md:mt-0">
                <p>Products</p>
                <section class="flex gap-6 text-[#676665] mt-5">
                    <ul class="flex space-x-4">
                        <li class="flex items-center">Menswear</li>
                        <li class="flex items-center before:content-['•'] before:mx-2">Womenswear</li>
                        <li class="flex items-center before:content-['•'] before:mx-2">Kidswear</li>
                    </ul>
                </section>
            </section>
            <section class="mt-10 md:mt-0">
                <p>Subscribe to Newsletter</p>
                <section class="flex items-center mt-2">
                    <input type="text" placeholder="Your Email" class="w-[80%] mt-2 h-10 bg-[#1A1A1A] rounded-l-lg px-6">
                    <button class="bg-[#1A1A1A] hover:bg-[#4A4A4A] h-10 mt-2 w-10 rounded-r-lg">
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