<script setup lang="ts">
const route = useRoute()
const id: string = route.params.id as string
</script>

<template>
    <section class="text-white px-6 pb-5 pt-20 mt-20">
        <section class="border-dashed border-[#262626] border-[5px] rounded-3xl">
            <ProductDetails :id="id"/>
        </section>
    </section>
</template>