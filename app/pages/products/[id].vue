<script setup lang="ts">
useSeoMeta({
    title: 'Product',
})

const route = useRoute()
const id: string = route.params.id as string
const { data: product, error, pending } = useProduct(id)

const { addToCart } = useCart()

</script>

<template>
    <section class="text-white px-6 pb-5 pt-20 mt-20">
        <section class="border-dashed border-[#262626] border-[5px] rounded-3xl">
            <ProductDetails :product="product" :error="error" :pending="pending" @add-to-cart="addToCart" />
        </section>
    </section>
</template>