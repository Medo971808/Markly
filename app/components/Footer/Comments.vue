<script setup lang="ts">
const testimonials = [
    {
        name: "Sarah Thompson",
        location: "New York, USA",
        image: "/images/comments/Customer1.png",
        text: "Markly exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    },
    {
        name: "Rajesh Patel",
        location: "Mumbai, India",
        image: "/images/comments/Customer2.png",
        text: "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    },
    {
        name: "Emily Walker",
        location: "London, UK",
        image: "/images/comments/Customer3.png",
        text: "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista.",
    },
    {
        name: "Alejandro Martinez",
        location: "Barcelona, Spain",
        image: "/images/comments/Customer4.png",
        text: "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!",
    },
    {
        name: "Priya Sharma",
        location: "Delhi, India",
        image: "/images/comments/Customer5.png",
        text: "Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings.",
    },
    {
        name: "Maria Rodriguez",
        location: "Mexico City, Mexico",
        image: "/images/comments/Customer6.png",
        text: "Stylish sneakers that don't compromise on comfort. StyleLoom knows how to balance fashion and functionality.",
    },
]
</script>

<template>
    <section class="text-white px-6 pb-5 pt-20">
        <section class="border-dashed border-[#262626] border-[5px] rounded-3xl">
            <h1 class="text-xl md:text-3xl m-10 uppercase">
                Markly Testimonial Collection.
            </h1>
            <p class="mt-5 text-[#4A4A4A] ml-10">
                At Markly, our customers are the heartbeat of our brand.
            </p>

            <section class="grid lg:grid-cols-3 md:grid-cols-2">
                <section v-for="(t, i) in testimonials" :key="i"
                    class="p-10 border-t-[5px] border-dashed border-[#262626]" :class="{
                        'md:border-r-[5px]': i % 2 === 0 && i !== testimonials.length - 1,
                        'lg:border-r-[5px]': i % 3 !== 2,
                        'mt-20': i < 3,
                    }">
                    <section class="flex justify-between items-center">
                        <section class="flex">
                            <nuxt-img :src="t.image" :alt="`Photo of ${t.name} from ${t.location}`" class="w-16 h-16" />
                            <section class="mt-3 md:mt-1 ml-3">
                                <p class="md:text-lg text-sm">{{ t.name }}</p>
                                <p class="text-[#4A4A4A] md:text-lg text-sm">
                                    {{ t.location }}
                                </p>
                            </section>
                        </section>
                        <a href="https://x.com/" aria-label="Visit Twitter profile">
                            <FontAwesomeIcon :icon="['fab', 'twitter']" class="text-[#C2B4A3] text-3xl" />
                        </a>
                    </section>

                    <section class="flex md:my-10 my-5">
                        <FontAwesomeIcon v-for="s in 5" :key="s" :icon="['fas', 'star']"
                            class="text-[#FFCE22] mr-1 text-sm md:text-lg" />
                    </section>

                    <p class="text-[#4A4A4A] text-sm md:text-lg">
                        {{ t.text }}
                    </p>
                </section>
            </section>
        </section>
    </section>
</template>
