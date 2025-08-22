<template>
  <main class="text-white px-6 pb-5 pt-20">
    <section class="px-5 py-10 border-[#262626] border-dashed">
      <h1 class="text-3xl md:text-4xl font-bold uppercase">Shop All Products</h1>
    </section>
    <section class="grid md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink to="/products/1"
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="p-4 border-t-[5px] border-dashed border-[#262626] flex items-center flex-col cursor-pointer"
      >
        <NuxtImg :src="product.image" class="w-full h-auto mb-2" />
        <section class="flex justify-between items-center w-full">
          <label
            class="rounded-full bg-[#1A1A1A] text-[#B3B3B2] w-32 flex justify-center items-center h-10 border-[3px] border-dashed border-[#262626]"
          >
            {{ product.category }}
          </label>
          <NuxtLink to="/cart" class="bg-[#1F1F1F] p-4 rounded-xl border-[3px] border-dashed border-[#AE9B84] 
                text-white font-medium transition-all duration-300 
                hover:bg-[#AE9B84] hover:text-black hover:scale-105 hover:shadow-lg">
                    Add To Cart
        </NuxtLink>
        </section>
        <section class="w-full">
          <p class="text-2xl font-bold mt-5 text-left xl:my-3">{{ product.name }}</p>
          <section class="flex items-center justify-between mt-2">
            <p class="text-[#81807E] text-xl">
              Fit: <span class="text-white text-xl">{{ product.fit }}</span>
            </p>
            <p class="text-[#81807E] text-xl">
              Price: <span class="text-white text-xl">${{ product.price }}</span>
            </p>
          </section>
        </section>
      </NuxtLink>
    </section>
  </main>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Urban Chic Handbag",
    fit: "Spacious",
    price: 49.99,
    category: "Accessories",
    image: "/images/products/Product7.png",
  },
  {
    id: 2,
    name: "Sophisticate Sun Hat",
    fit: "One size fits all",
    price: 24.99,
    category: "Accessories",
    image: "/images/products/Product5.png",
  },
  {
    id: 3,
    name: "Boho Chic Printed Scarf",
    fit: "Lightweight",
    price: 19.99,
    category: "Womenswear",
    image: "/images/products/Product8.png",
  },
  {
    id: 4,
    name: "Elegant Shoulder Bag",
    fit: "Compact",
    price: 39.99,
    category: "Bags",
    image: "/images/products/Product9.png",
  },
  {
    id: 5,
    name: "Classic Leather Tote",
    fit: "Large",
    price: 79.99,
    category: "Bags",
    image: "/images/products/Product10.png",
  },
  {
    id: 6,
    name: "Chic Printed Pouch",
    fit: "Lightweight",
    price: 15.99,
    category: "Accessories",
    image: "/images/products/Product11.png",
  },
]
</script>
