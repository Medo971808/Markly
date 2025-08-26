import Stripe from 'stripe'

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripeSecretKey, { apiVersion: "2025-07-30.basil", })

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const origin = body.origin

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: body.items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${origin}/success`,
    cancel_url: `${origin}/cancel`,
  })

  return { url: session.url }
})
