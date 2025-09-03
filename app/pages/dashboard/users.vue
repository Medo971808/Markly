<script setup lang="ts">
definePageMeta({
    layout: "dashboard",
})

import { ref, onMounted } from "vue"

interface User {
    uid: string
    displayName: string | null
    email: string | null
    photoURL: string | null
    disabled: boolean
}

const users = ref<User[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const fetchUsers = async () => {
    loading.value = true
    error.value = null
    try {
        const res = await $fetch<User[]>('/.netlify/functions/listUsers')
        users.value = res
    } catch (err: any) {
        error.value = err.message || 'Failed to load users'
    } finally {
        loading.value = false
    }
}

const toggleUserDisabled = async (id: string) => {
    try {
        await $fetch(`/.netlify/functions/disable?id=${id}`, { method: 'POST' })
        await fetchUsers()
    } catch (err: any) {
        console.error(err)
    }
}

onMounted(() => {
    fetchUsers()
})
</script>

<template>
    <section class="space-y-6">
        <section class="flex items-center justify-between">
            <h1 class="text-2xl font-bold">Users</h1>
        </section>

        <section v-if="error" class="text-red-500">{{ error }}</section>

        <section v-else-if="loading" class="flex flex-col justify-center items-center py-20">
            <section class="w-16 h-16 border-4 border-dashed rounded-full border-[#AE9B84] animate-spin"></section>
            <p class="mt-5 text-xl text-[#AE9B84] font-semibold">Loading users...</p>
        </section>

        <section v-else class="hidden md:block rounded-2xl">
            <table class="w-full border-collapse">
                <thead class="text-left">
                    <tr>
                        <th class="p-4">Image</th>
                        <th class="p-4">Name</th>
                        <th class="p-4">Email</th>
                        <th class="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.uid" class="border-t hover:bg-gray-900">
                        <td class="p-4">
                            <img :src="user?.photoURL || '/face.jpg'" alt="user"
                                class="w-12 h-12 rounded-full object-cover" />
                        </td>
                        <td class="p-4 font-medium">{{ user.displayName }}</td>
                        <td class="p-4">{{ user.email }}</td>
                        <td class="p-4">
                            <button class="px-4 py-2 rounded-md w-24"
                                :class="user.disabled ? 'bg-green-500' : 'bg-red-500'"
                                @click="toggleUserDisabled(user.uid)">
                                {{ user.disabled ? "Unblock" : "Block" }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr>
        </section>

        <section class="grid gap-4 md:hidden">
            <div v-for="user in users" :key="user.uid"
                class="bg-[#1A1A1A] p-4 rounded-xl shadow flex items-center gap-4">
                <img :src="user?.photoURL || '/face.jpg'" alt="user" class="w-16 h-16 rounded-full object-cover" />
                <div class="flex-1">
                    <p class="font-semibold">{{ user.displayName || "Unknown User" }}</p>
                    <p class="text-sm text-gray-400">{{ user.email }}</p>
                </div>
                <button class="px-3 py-1 rounded-md text-sm w-24" :class="user.disabled ? 'bg-green-500' : 'bg-red-500'"
                    @click="toggleUserDisabled(user.uid)">
                    {{ user.disabled ? "Unblock" : "Block" }}
                </button>
            </div>
        </section>
    </section>
</template>
