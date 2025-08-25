<script setup lang="ts">
const { pending, error, filteredProducts } = useProducts()
const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"]

const normalizedFilteredProducts = (category: string) => {
  return filteredProducts(category).value ?? []
}

const { addToCart } = useCart()
</script>

<template>
  <ProductsContent
    :pending="pending"
    :error="error"
    :categories="categories"
    :filtered-products="normalizedFilteredProducts"
    @add-to-cart="addToCart"
  />
</template>
