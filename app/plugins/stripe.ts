import { loadStripe, type Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null> | null = null

export const getStripe = (publicKey: string) => {
  if (!stripePromise) {
    stripePromise = loadStripe(publicKey)
  }
  return stripePromise
}