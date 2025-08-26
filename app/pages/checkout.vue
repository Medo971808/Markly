<script setup lang="ts">
import { ref, computed } from 'vue'
import { loadStripe } from '@stripe/stripe-js'

const cart = useState<any[]>("cart", () => [])

const name = ref('')
const email = ref('')
const address = ref('')
const city = ref('')
const zip = ref('')
const emptyInputs = ref(false)
const emptyCart = ref(false)

const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const checkout = async () => {
    try {
        if (!name.value || !email.value || !address.value || !city.value || !zip.value) {
            emptyInputs.value = true
            return
        }
        if (cart.value.length === 0) {
            emptyCart.value = true
            return
        }
        const config = useRuntimeConfig()
        const stripeKey = config.public.stripePublicKey
        if (!stripeKey) {
            console.error('Stripe Public Key missing!')
            return
        }
        const stripe = await loadStripe(stripeKey)
        if (!stripe) {
            alert('Stripe.js failed to load')
            return
        }
        const origin = window.location.origin
        const itemsForStripe = cart.value.map(item => ({
            name: item.title,
            price: item.price * 100,
            quantity: item.quantity
        }))

        const res: any = await $fetch('/.netlify/functions/create-checkout-session', {
            method: 'POST',
            body: { items: itemsForStripe, origin }
        })

        if (!res.url) {
            console.error('No URL returned from function', res.url)
            alert('Checkout failed. Please try again.')
            return
        }
        window.location.href = res?.url

    } catch (err: any) {
        console.error('Checkout error:', err)
        alert('Something went wrong. Please try again.')
    }
}
</script>

<template>
    <section class="text-white px-6 pb-5 pt-20">
        <section class="max-w-4xl mx-auto p-6 rounded-xl shadow-lg mt-10">
            <section v-if="emptyCart" class="text-red-700 text-2xl mb-10">
                Cart is empty
            </section>
            <section v-else-if="emptyInputs" class="text-red-700 text-2xl mb-10">
                Please fill inputs
            </section>

            <h1 class="text-3xl font-bold mb-6">Checkout</h1>

            <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input v-model="name" type="text" placeholder="Full Name" class="border p-3 rounded w-full" />
                <input v-model="email" type="email" placeholder="Email" class="border p-3 rounded w-full" />
                <input v-model="address" type="text" placeholder="Address"
                    class="border p-3 rounded w-full md:col-span-2" />
                <input v-model="city" type="text" placeholder="City" class="border p-3 rounded w-full" />
                <input v-model="zip" type="text" placeholder="ZIP Code" class="border p-3 rounded w-full" />
            </section>

            <section class="mb-6">
                <h2 class="text-xl font-semibold mb-2">Order Summary</h2>
                <ul class="divide-y divide-gray-200">
                    <li v-for="item in cart" :key="item.id" class="py-2 flex justify-between">
                        <span>{{ item.title }} x{{ item.quantity }}</span>
                        <span>${{ item.price * item.quantity }}</span>
                    </li>
                </ul>
                <section class="flex justify-between mt-4 font-bold text-lg">
                    <span>Total:</span>
                    <span>${{ totalPrice.toFixed(2) }}</span>
                </section>
            </section>

            <button @click="checkout" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                Pay with Stripe
            </button>
        </section>
    </section>
</template>
