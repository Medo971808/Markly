export const useCart = () => {
  const cart = useState<any[]>("cart", () => [])

  const addToCart = (p: any) => {
    const existingItem = cart.value.find(item => item.id === p.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ ...p, quantity: 1 })
    }
  }
  return { cart, addToCart }
}