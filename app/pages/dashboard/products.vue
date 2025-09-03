<script setup>
import { ref } from "vue"

definePageMeta({
    layout: "dashboard",
})

const { data, pending, error } = useProducts()

const currentPage = ref(1)

const products = computed(() => data.value)
const itemsPerPage = ref(5)

const totalPages = computed(() => {
    return Math.ceil((products.value?.length || 0) / itemsPerPage.value)
})

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return products.value?.slice(start, end)
})

const showModal = ref(false)

const newProduct = ref({
    name: "",
    price: "",
    category: "",
    image: "",
})

const addProduct = () => {
    if (!newProduct.value.name || !newProduct.value.price || !newProduct.value.category || !newProduct.value.image) return

    products.value.push({
        id: Date.now(),
        ...newProduct.value,
    })

    newProduct.value = { name: "", price: "", category: "", image: "" }
    showModal.value = false
}

const removeProduct = (id) => {
    data.value = data.value.filter((product) => product.id !== id)
}
</script>

<template>
    <section class="space-y-6">
        <section class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 class="text-2xl font-bold">Products</h1>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 w-full sm:w-auto"
                @click="showModal = true">
                + Add Product
            </button>
        </section>
        <h1 v-if="error">{{ error }}</h1>
        <section v-else-if="pending" class="flex flex-col justify-center items-center py-20">
        <section class="w-16 h-16 border-4 border-dashed rounded-full border-[#AE9B84] animate-spin"></section>
        <p class="mt-5 text-xl text-[#AE9B84] font-semibold">Loading products...</p>
      </section>
        <section class="rounded-2xl" v-else>
            <section class="hidden md:block">
                <table class="w-full">
                    <thead class="text-left">
                        <tr>
                            <th class="p-4">Image</th>
                            <th class="p-4">Name</th>
                            <th class="p-4">Price</th>
                            <th class="p-4">Category</th>
                            <th class="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in paginatedProducts" :key="product.id" class="border-t hover:bg-gray-900">
                            <td class="p-4">
                                <img :src="product.image || 'https://via.placeholder.com/60'" alt="product"
                                    class="w-auto h-12 rounded-lg object-cover" />
                            </td>
                            <td class="p-4 font-medium">{{ product.title }}</td>
                            <td class="p-4">${{ product.price }}</td>
                            <td class="p-4">{{ product.category }}</td>
                            <td class="p-4 flex gap-2">
                                <button class="bg-blue-800 px-3 py-1 rounded-md">Edit</button>
                                <button class="bg-red-500 px-3 py-1 rounded-md" @click="removeProduct(product.id)">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr>
            </section>

            <section class="grid gap-4 md:hidden">
                <div v-for="product in paginatedProducts" :key="product.id"
                    class="bg-[#1A1A1A] p-4 rounded-xl shadow flex flex-col gap-2">
                    <img :src="product.image || 'https://via.placeholder.com/100'" alt="product"
                        class="w-fukk h-auto object-cover rounded-lg" />
                    <p class="font-semibold text-lg">{{ product.title }}</p>
                    <p class="text-sm text-gray-400">${{ product.price }}</p>
                    <p class="text-sm">{{ product.category }}</p>
                    <div class="flex gap-2 mt-2">
                        <button class="bg-blue-800 flex-1 py-2 rounded-md">Edit</button>
                        <button class="bg-red-500 flex-1 py-2 rounded-md" @click="removeProduct(product.id)">
                            Delete
                        </button>
                    </div>
                </div>
            </section>
        </section>

        <section v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
            <section
                class="bg-black border-dashed border-[5px] border-[#262626] p-6 rounded-2xl shadow-lg w-full max-w-md">
                <h2 class="text-xl font-bold mb-4">Add Product</h2>

                <form class="space-y-4" @submit.prevent="addProduct">
                    <input v-model="newProduct.name" type="text" placeholder="Product Name"
                        class="w-full border rounded-lg p-2 bg-[#1A1A1A]" />
                    <input v-model="newProduct.price" type="number" placeholder="Price"
                        class="w-full border rounded-lg p-2 bg-[#1A1A1A]" />
                    <input v-model="newProduct.category" type="text" placeholder="Category"
                        class="w-full border rounded-lg p-2 bg-[#1A1A1A]" />
                    <input v-model="newProduct.image" type="text" placeholder="Image URL"
                        class="w-full border rounded-lg p-2 bg-[#1A1A1A]" />

                    <section class="flex flex-col sm:flex-row justify-end gap-3">
                        <button type="button" class="px-4 py-2 rounded-lg border w-full sm:w-auto"
                            @click="showModal = false">
                            Cancel
                        </button>
                        <button type="submit"
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto">
                            Add
                        </button>
                    </section>
                </form>
            </section>
        </section>

        <section class="flex justify-center space-x-2 items-center mt-6" v-if="totalPages > 1">
            <section class="flex gap-4 flex-wrap">
                <p><</p>
                <ul class="flex gap-2">
                    <li v-for="n in totalPages" :key="n" @click="currentPage = n"
                        class="cursor-pointer px-3 py-1 rounded-md" :class="{
                            'bg-blue-600 text-white': currentPage === n,
                            'hover:bg-gray-800': currentPage !== n,
                        }">
                        {{ n }}
                    </li>
                </ul>
                <p>></p>
            </section>
        </section>
    </section>
</template>
